This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# [Map Location Tracing](https://maulik-soni.github.io/map-location-tracing/)

## Folder Structure
```
config ### Unit testing, Environment Variable setup, Webpack configuratino
docs ### Production Build folder, github page folder
node_modules ### Dependencies
public ### main index.html, static assets folder
scripts ### Development, Production and Unit Test run scripts
src/
    constants/
    component/ ### All Components
    helper/
    redux/
      setup.js
      mapStore.js ### store for map and table interactions
    style ### CSS for all components
    index.js
package.json
```

## Available Scripts
In the project directory, you can run:
### `yarn add` OR `npm install` 
Installs all the dependencies for the project.

### `yarn start` OR `npm run start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build` OR `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Stack
- ReactJS
- Redux (react-redux)
- Webpack : Used for package bundling
- HTML
- CSS
- google-map-react for map
