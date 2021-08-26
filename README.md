# Tempest Insights Dashboard

Please visit [https://insights-dashboard-tempest.netlify.app/](https://insights-dashboard-tempest.netlify.app/) for live demo.


## Dependencies
- [Node.js](https://nodejs.org/en/)
- [yarn.js](https://yarnpkg.com/getting-started/install)
- This app makes HTTP requests to [Tempest Dashboard API](https://github.com/minachuong/tempest_dashboard_api)

## Set Up

When running both apps locally, serve Tempest Dashboard API first as it will run on port 3000, then start this app so that it serves on the next available port.

## Deployment
 [![Netlify Status](https://api.netlify.com/api/v1/badges/489bf3a1-45af-40ca-b56a-53ad003a1c12/deploy-status)](https://app.netlify.com/sites/elastic-mcnulty-02ecdd/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `yarn` 

Installs all node dependencies required for this app.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



### Tasks
- X implement card component
- write tests for card component
- X decide which chart library to use: recharts, it is!
- X implement chart component