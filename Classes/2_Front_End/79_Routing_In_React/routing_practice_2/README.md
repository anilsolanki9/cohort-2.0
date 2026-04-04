# Routing Practice Project

A React + Vite project demonstrating client-side navigation with `react-router-dom`, nested routes, dynamic routes, and a simple Tailwind-powered UI.

## Project Overview

This project is built with:

- React 19
- Vite
- React Router DOM 7
- Tailwind CSS
- ESLint

## What’s Included

- `Home` and `About` static pages
- `Products` page with nested routes for `Mens` and `Womens`
- `Cources` page with dynamic route support for individual courses
- Dynamic route example: `/cources/:courseName`
- Nested dynamic route example: `/cources/:courseName/details`
- Fallback `NotFoundPage` for unmatched routes
- Navigation using `NavLink` for active link styling

## Folder Structure

- `src/`
  - `App.jsx` — route definitions and main layout
  - `main.jsx` — React entry point
  - `components/`
    - `Navbar.jsx` — primary navigation component
  - `pages/` — route page components such as `Home`, `About`, `Products`, `Cources`, `AnyCourse`, etc.
- `public/` — static assets served by Vite
- `package.json` — project scripts and dependencies
- `vite.config.js` — Vite build configuration

## Available Scripts

From the project root, run the following commands:

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Usage

1. Clone or open the project folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the local development URL shown in the terminal

## Routing Examples

- `/` — Home page
- `/about` — About page
- `/products` — Products overview
- `/products/mens` — Mens products subpage
- `/products/womens` — Womens products subpage
- `/cources` — Courses overview
- `/cources/react` — Dynamic course page for `react`
- `/cources/react/details` — Nested dynamic course details page
- Any invalid route will show the NotFound page.

## Notes

The project is designed for learning routing concepts in React with a focus on:

- nested routes
- dynamic path parameters
- route fallbacks
- active link styling

Enjoy exploring the navigation setup and modifying the pages for your own routing practice.
