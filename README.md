# vue3-todo

A small Vue 3 + TypeScript app that lists todos from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) and lets you add new ones. Built with Vite, Pinia, Vue Router and Bootstrap.

## Features

- **Posts list**: fetches `/todos` once and caches it in a Pinia store.
- **Post detail**: select a post to open it at `/posts/:id`. Unknown ids redirect to the 404 page.
- **Add post**: the "Add post" button opens a dialog with a title form. New posts are kept in memory only and are lost on reload.
- **Home**: an animated landing page at `/home`.

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/home`. There is no route at `/`, so it shows the 404 page.

## Scripts

| Command                 | What it does                               |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Start the Vite dev server                  |
| `npm run serve`         | Dev server using `.env.development`        |
| `npm run product`       | Dev server using `.env.production`         |
| `npm run build`         | Build to `dist/` using `.env.development`  |
| `npm run build:product` | Build to `dist/` using `.env.production`   |
| `npm run preview`       | Serve the built `dist/` locally            |

## Configuration

The API base URL comes from `VITE_APP_BASE_API`, which is set in `.env.development` and `.env.production`:

```env
VITE_APP_BASE_API = 'http://jsonplaceholder.typicode.com'
```

## Project structure

```
src/
├── api/            # axios instance, endpoints and request functions
├── common/         # shared components (ButtonApp, DialogApp) and types
├── layout/         # header and content wrapper
├── store/post/     # Pinia store: state, getters, actions
├── views/
│   ├── home/
│   ├── posts-page/ # list, add-post dialog, composables, route guard
│   ├── post-page/  # single post view and its guard
│   └── not-found/
├── app.route.ts    # router setup
└── main.ts         # app entry
```

Each view has its own `*.route.ts`, and `app.route.ts` combines them. Route guards load the data before a page opens: `IsPostsGuard` fetches the posts, and `IsPostGuard` checks that the post id exists.

## Tech stack

Vue 3 (`<script setup>`), TypeScript, Vite, Pinia, Vue Router 4, axios, Bootstrap 5 and SCSS.

## Recommended IDE setup

[VS Code](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
