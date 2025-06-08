# TravelTrucks Frontend

A React + Vite application for renting camper vans.

## 🚀 Project Overview

This project is a frontend application for TravelTrucks that allows users to:
- View available camper vans
- Filter camper vans by location, body type, and features
- Add camper vans to favorites
- View details of each camper with reviews and a booking form
- Responsive UI with Redux state management

## 📁 Project Structure

- `/` — Home page
- `/catalog` — Camper catalog with filters and Load More button
- `/catalog/:id` — Camper details page with reviews and booking form

## 🛠️ Tech Stack

- React + Vite
- Redux Toolkit for state management
- React Router for routing
- Axios for API calls
- react-helmet-async for head management
- CSS Modules for styling

## 🖥️ Running the App Locally

1. Clone the repository:
   ```bash
   git clone <YOUR_REPO_URL>
   cd travel-trucks
   ```

2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the app:
    ```bash
    npm run dev
    ```
4. Visit http://localhost:5173