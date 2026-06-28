# PokeJS

An experimental React app for browsing Pokemon. It lists Pokemon and lets you
search them, filter by type and move, and open a detail view for a single
Pokemon. All data comes from the public PokeAPI (pokeapi.co).

The stack is plain: React with Create React App, react-router for client-side
routing, and a small set of custom hooks for fetching data from the API.

## Run locally

```
npm install
npm start
```

`npm start` runs the Create React App dev server and opens the app in your
browser. To produce a production build:

```
npm run build
```

## Features

- Paginated list of Pokemon with adjustable page size.
- Search by name.
- Filter by one or more types and moves.
- Detail view for a single Pokemon, showing sprites, height, weight, types,
  and moves.

## Data and IP

Data comes from the public PokeAPI (https://pokeapi.co). Pokemon and all
related names and assets are trademarks of Nintendo, Game Freak, and The
Pokemon Company. This is a non-commercial project built for learning. No game
assets are bundled in this repository; sprites and data are fetched at runtime
from the public API.

## Limitations

This is a learning sample, not a maintained product. It is built on the
deprecated Create React App toolchain and an older version of React, so expect
rough edges and outdated dependencies.
