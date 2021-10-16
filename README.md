# TypeScript-React Custom Boilerplate

This is a front-end boilerplate made for TypeScript-React applications, intended as a substitute for Create-React-App.

This assumes no further stack decisions and is intentionally minimal.

- Language: TypeScript
- Front-End Framework: React
- Linting: ESLint
- Package Manager: Yarn

## Instructions 

To use this boilerplate:

- Run `git clone https://github.com/apettenati/react-typescript-boilerplate.git`
- Rename the directory to your preferred name and `cd` into the directory
- Delete the existing `.git` directory and initialize a new git repo
- Change the `name` property and other necessary information in the `package.json`
- Run `yarn` to install the dependencies
- Update the `title` in the `public/index.html`
- Start coding!

## Scripts

- Run `yarn` to install dependencies
- Run `yarn lint` to lint the project
- Run `yarn build` to bundle the application into a `dist` folder
- Run `yarn start` to start a development server with live reloading


Note there are no production scripts or webpack configuration.

This does not support asset management. For additional information on how to incorporate other assets (i.e. png, css), view the [Asset Management WebPack guide](https://webpack.js.org/guides/asset-management/).