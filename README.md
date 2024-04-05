# Getting Started with React Capacitor App

**Prerequisite**
1. latest/stable nodejs should be installed on your machine
2. Download/clone the project on your machine
3. goto projects root directory using cd command
4. latest/stable android studio should be installed on your machine
5. latest/stable xcode should be installed on your machine

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all JS dependencies locally.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npx cap open android`

**Note: this will open android project into android studio**

Then you can start an emulator to view application

### `npx cap open ios`

**Note: this will open ios project into xcode**

Then you can start an simulator to view application

### `Enable Hot Reloading for andoird and ios`

Open capacitor.config.ts and inside server section add your local IP in url key with port 3000.
Example: url : 'http://192.168.1.34:3000'

### `npx cap copy`

When you make any changes into project, run this to reload changes into native platforms

### `npx cap sync`

When you make any changes into config file or add plugins, run this to reload changes into native platforms