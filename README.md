# TravelTrucks 🚐🚐🚐

**TravelTrucks** - a camper rental web app.

## Features

- **Home page (`/`)**
  - Banner with CTA button **"View Now"** that navigates to the catalog.

- **Catalog page (`/catalog`)**
  - Displays a list of available campers from the API.
  - **Filters**:
    - Location (text input)
    - Vehicle type (single select)
    - Vehicle equipment (multiple select: AC, kitchen, bathroom, TV, etc.)
  - **Favorites**
    - Add/remove campers to favorites.
    - Favorites are **persisted after page refresh** (redux-persist/localStorage).
  - **Load More**
    - Button **"Load more"** to show more camper cards.

- **Camper details page (`/catalog/:id`)**
  - Detailed camper info + image gallery.
  - Camper characteristics (if present): `transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water`
  - Camper details (if present): `form, length, width, height, tank, consumption`
  - **Reviews**
    - Reviews shown with **5-star rating** UI.
  - **Booking form**
    - Booking form with success notification.

## 🔗 API

Uses the provided backend API:
- `GET /campers`
- `GET /campers/:id`

Base URL:
`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`

## Tech Stack

- React + Vite
- Redux Toolkit
- redux-persist (favorites persistence)
- React Router
- Axios
- Formik + Yup (forms/validation)
- react-helmet-async
- CSS Modules

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## 🌍 Deploy

Deployed on Vercel:  

[🔗 Travel Trucks - Live Demo](https://travel-trucks-dun.vercel.app/)
