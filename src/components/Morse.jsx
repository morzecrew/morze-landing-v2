import { useState, useEffect, useRef } from 'react';

export const MORSE_ROWS = [
    '. ..-.. -. -',
    '..- .--. .-',
    '-- .. .-. --',
    '.- ...- - -',
];

const MORSE_PALETTE = [
    '#a073f4',
    '#f1c267',
    '#7b8cf8',
    '#8e9df9',
    '#50c8a0',
];

const MORSE_HOVER_DELAY_MS = 220;

function pickRandomColor() {
    return MORSE_PALETTE[Math.floor(Math.random() * MORSE_PALETTE.length)];
}

function getDefaultMorseColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#eeeef2';
}

function applyMorseHover(el) {
    el.style.backgroundColor = pickRandomColor();
    el.style.opacity = '0.8';
}

function resetMorseHover(el) {
    el.style.backgroundColor = getDefaultMorseColor();
    el.style.opacity = '0.03';
}

function getSymbolStyle(colIndex, symbolIndex, flashTarget, hoveredSymbol) {
    const isHovered = hoveredSymbol && hoveredSymbol.colIndex === colIndex && hoveredSymbol.symbolIndex === symbolIndex;
    const isFlashing = flashTarget && flashTarget.colIndex === colIndex && flashTarget.symbolIndex === symbolIndex;
    if (isHovered) return { backgroundColor: hoveredSymbol.color, opacity: 0.8 };
    if (isFlashing) return { backgroundColor: flashTarget.color, opacity: 0.8 };
    return { backgroundColor: getDefaultMorseColor(), opacity: 0.03 };
}

function MorseSymbols({ pattern, colIndex = 0, flashTarget, hoveredSymbol, onHoverStart, onHoverEnd }) {
    const useStateHover = typeof onHoverStart === 'function';
    return pattern.split('').map((char, i) => {
        const style = useStateHover
            ? getSymbolStyle(colIndex, i, flashTarget, hoveredSymbol)
            : { backgroundColor: getDefaultMorseColor(), opacity: 0.03 };

        const mouseEnter = useStateHover
            ? () => onHoverStart(colIndex, i)
            : (e) => {
                  const el = e.currentTarget;
                  if (el._morseHoverTimer) clearTimeout(el._morseHoverTimer);
                  el._morseHoverTimer = setTimeout(() => {
                      el._morseHoverTimer = null;
                      applyMorseHover(el);
                  }, MORSE_HOVER_DELAY_MS);
              };
        const mouseLeave = useStateHover
            ? onHoverEnd
            : (e) => {
                  const el = e.currentTarget;
                  if (el._morseHoverTimer) {
                      clearTimeout(el._morseHoverTimer);
                      el._morseHoverTimer = null;
                  }
                  resetMorseHover(el);
              };

        if (char === '.') {
            return (
                <span
                    key={i}
                    className="morse-strip__dot"
                    style={style}
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                />
            );
        }
        if (char === '-') {
            return (
                <span
                    key={i}
                    className="morse-strip__dash"
                    style={style}
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                />
            );
        }
        return null;
    });
}

export function MorseRow({ pattern, direction, duration, delay, colIndex = 0, flashTarget, hoveredSymbol, onHoverStart, onHoverEnd }) {
    const symbolProps = { pattern, colIndex, flashTarget, hoveredSymbol, onHoverStart, onHoverEnd };
    return (
        <div className="morse-strip__row">
            <div
                className={`morse-strip__row-track morse-strip__row-track--${direction}`}
                style={{
                    animationDuration: `${duration}s`,
                    animationDelay: `${-delay}s`,
                }}
            >
                <div className="morse-strip__row-content">
                    <MorseSymbols {...symbolProps} />
                </div>
                <div className="morse-strip__row-content">
                    <MorseSymbols {...symbolProps} />
                </div>
            </div>
        </div>
    );
}

/* Вертикальная версия: колонки без rotate. Отрицательный delay = старт в «будущей» позиции без паузы */
export function MorseColumn({ pattern, direction, duration, delay, colIndex, flashTarget, hoveredSymbol, onHoverStart, onHoverEnd }) {
    const symbolProps = { pattern, colIndex, flashTarget, hoveredSymbol, onHoverStart, onHoverEnd };
    return (
        <div className="morse-strip__col">
            <div
                className={`morse-strip__col-track morse-strip__col-track--${direction}`}
                style={{
                    animationDuration: `${duration}s`,
                    animationDelay: `${-delay}s`,
                }}
            >
                <div className="morse-strip__col-content">
                    <MorseSymbols {...symbolProps} />
                </div>
                <div className="morse-strip__col-gap" aria-hidden />
                <div className="morse-strip__col-content">
                    <MorseSymbols {...symbolProps} />
                </div>
                <div className="morse-strip__col-gap" aria-hidden />
            </div>
        </div>
    );
}

const COLUMN_CONFIG = [
    { pattern: MORSE_ROWS[0], direction: 'up', duration: 115, delay: 0 },
    { pattern: MORSE_ROWS[1], direction: 'down', duration: 62, delay: 0.3 },
    { pattern: MORSE_ROWS[2], direction: 'up', duration: 134, delay: 0.5 },
    { pattern: MORSE_ROWS[3], direction: 'down', duration: 120, delay: 0.1 },
];

const ROW_CONFIG = [
    { direction: 'right', duration: 115, delay: 0 },
    { direction: 'left', duration: 152, delay: 0.3 },
    { direction: 'right', duration: 144, delay: 0.5 },
    { direction: 'left', duration: 160, delay: 0.1 },
];

function getRandomFlashTarget(count) {
    const colIndex = Math.floor(Math.random() * count);
    const pattern = MORSE_ROWS[colIndex];
    const indices = pattern.split('').map((c, i) => i).filter((i) => pattern[i] === '.' || pattern[i] === '-');
    if (indices.length === 0) return null;
    const symbolIndex = indices[Math.floor(Math.random() * indices.length)];
    return { colIndex, symbolIndex, color: pickRandomColor() };
}

export function MorseStrip({
    layout = 'vertical',
    count = 4,
    randomFlash = false,
    randomFlashIntervalMs = 2000,
    randomFlashDurationMs = 600,
}) {
    const safeCount = Math.min(4, Math.max(1, Math.floor(count)));
    const [flashTarget, setFlashTarget] = useState(null);
    const [hoveredSymbol, setHoveredSymbol] = useState(null);
    const hoverPendingRef = useRef(null);
    const flashTimeoutRef = useRef(null);

    useEffect(() => {
        if (!randomFlash) return;
        const intervalId = setInterval(() => {
            const target = getRandomFlashTarget(safeCount);
            if (!target) return;
            if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
            setFlashTarget(target);
            flashTimeoutRef.current = setTimeout(() => {
                setFlashTarget(null);
                flashTimeoutRef.current = null;
            }, randomFlashDurationMs);
        }, randomFlashIntervalMs);
        return () => {
            clearInterval(intervalId);
            if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
        };
    }, [randomFlash, randomFlashIntervalMs, randomFlashDurationMs, safeCount]);

    const onHoverStart = (colIndex, symbolIndex) => {
        if (hoverPendingRef.current?.timer) clearTimeout(hoverPendingRef.current.timer);
        hoverPendingRef.current = {
            colIndex,
            symbolIndex,
            timer: setTimeout(() => {
                setHoveredSymbol({ colIndex, symbolIndex, color: pickRandomColor() });
                hoverPendingRef.current.timer = null;
            }, MORSE_HOVER_DELAY_MS),
        };
    };
    const onHoverEnd = () => {
        if (hoverPendingRef.current?.timer) {
            clearTimeout(hoverPendingRef.current.timer);
            hoverPendingRef.current.timer = null;
        }
        setHoveredSymbol(null);
    };

    const stripClass = `morse-strip ${layout === 'vertical' ? 'morse-strip--vertical' : 'morse-strip--horizontal'}`;

    if (layout === 'horizontal') {
        return (
            <div className={stripClass} aria-hidden>
                {ROW_CONFIG.slice(0, safeCount).map((config, rowIndex) => (
                    <MorseRow
                        key={rowIndex}
                        pattern={MORSE_ROWS[rowIndex]}
                        {...config}
                        colIndex={rowIndex}
                        flashTarget={flashTarget}
                        hoveredSymbol={hoveredSymbol}
                        onHoverStart={onHoverStart}
                        onHoverEnd={onHoverEnd}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={stripClass} aria-hidden>
            {COLUMN_CONFIG.slice(0, safeCount).map((config, colIndex) => (
                <MorseColumn
                    key={colIndex}
                    {...config}
                    colIndex={colIndex}
                    flashTarget={flashTarget}
                    hoveredSymbol={hoveredSymbol}
                    onHoverStart={onHoverStart}
                    onHoverEnd={onHoverEnd}
                />
            ))}
        </div>
    );
}


