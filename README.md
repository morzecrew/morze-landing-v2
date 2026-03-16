# Morze Landing

Landing website for **Morze** — a digital production studio.

## Tech Stack

- **React 19** with React Router 7
- **Vite 6** for dev server & builds
- Deployed on **Vercel**

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/    # Shared UI components (Header, Footer, Reveal, ScrollToHash)
├── pages/         # Route-level pages (HomePage, case studies)
├── sections/      # Homepage sections (Hero, About, Directions, Process, etc.)
├── App.jsx        # Router setup
└── main.jsx       # Entry point
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/cases/radioavionika` | Radioavionika case study |
| `/cases/efa-medika` | Efa Medika case study |
