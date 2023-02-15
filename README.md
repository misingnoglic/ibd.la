[![Netlify Status](https://api.netlify.com/api/v1/badges/85b336c9-e4d1-4ae5-8346-20e9f5f455d9/deploy-status)](https://app.netlify.com/sites/ibd-la/deploys)


# Introduction

This is the repo for the source code backing [ibd.la](https://ibd.la). See the website for details about the purpose of the website.

# About the tech and libraries

The website is developed with [React](https://reactjs.org/), a front-end JavaScript library for building interactive user interfaces on the web. The components are build on top of the component library [MUI](https://mui.com/). Routing is done with [React Router](https://reactrouter.com/). All of the charts are built with [plotly](https://plotly.com/). The map overlay is built with [Mapbox](https://www.mapbox.com/) and [deck gl](https://deck.gl/). The website is hosted with [Netlify](https://www.netlify.com/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# App Structure

Note this is not what I would call the optimal app structure, just what I have came up with during development. If you have any opinions, we take pull requests :)

- src/App.js houses the main component, which contains the tabs at the top, the footer, and a space for the different page components, which is determined by src/AppRouter.jsx. When the tabs are clicked, an event is dispatched for the AppRouter component to change the URL. 
- src/AppRouter.jsx has all the React Router logic to decide which inner component to render, depending on the URL. When App.js sends a tab click event, a component listens for this event and will change the URL. This is done for [code splitting](https://create-react-app.dev/docs/code-splitting/) purposes.

There is currently no backend. This is due to the fact that the data is not expected to change often, and is fairly small. The map data lives in the `data` folder. Some other data lives in the `src/data` folder, I am working on moving that out of the build to reduce its size.

# Running Locally

## First Time Setup

TODO: Make a docker image to run this app. For now, here's the instructions to install: 

- Clone the repo from GitHub.
- Install npm on your device
- Run `npm i` to install all the dependencies.

## Running the App

To run the app locally in development mode, run the following command:

* `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Deployment

The app is automatically deployed to ibd.la once a new version hits the main branch on Github. You don't have to do anything.

# Contributing Guide

If you would like to take on fixing up something on the website, we are very open to suggestions. Please contact us via issue first with your proposal, and let's have a discussion before getting into the code.

When writing the code, please use prettier to format your JS code. This is done by running `npx prettier --write path/to/Component.jsx`. There are currently no unit or snapshot tests, but if you add those to your code or our code we will be thankful for it. Additionally, run eslint and make sure there aren't any really bad lint errors.

After that, just submit a pull request, include any appropriate screen recordings or screenshots, and we will merge it into production after testing.

# Debugging 

## How to analyze the build 

From [This page](https://create-react-app.dev/docs/analyzing-the-bundle-size/)

If the build is getting slower, try analyzing the build to see what is causing it to bloat. Then run the following commands.

- `npm run build`
- `npm run analyze`

# Useful Links

Here is a list of links I used during development.

- https://mui.com
- https://plotly.com/javascript/react
- https://github.com/christacaggiano/phecode-assoc
- https://github.com/tsdataclinic/AfricaCovidDashboard/blob/master/packages/frontend/src/components/africa-map
- https://geojson.org/
- https://visgl.github.io/react-map-gl
- https://leafletjs.com/reference.html#geojson
- OpenLayers 
- https://github.com/visgl/deck.gl
- https://github.com/visgl/deck.gl/blob/8.6-release/examples/website/geojson/app.js

# Various React Links

## Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

## Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

