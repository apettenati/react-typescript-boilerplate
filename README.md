# TypeScript-React Custom Boilerplate

This is a front-end boilerplate made for TypeScript-React applications, intended as a substitute for Create-React-App.

This assumes no further stack decisions and is intentionally minimal.

- Language: [TypeSCript](https://github.com/microsoft/TypeScript)
- Front-End Framework: [React](https://github.com/facebook/react/)
- Linting: [ESLint](https://github.com/eslint/eslint)
- Package Manager: [Yarn](https://github.com/yarnpkg/berry)

Note there are no production scripts or webpack configuration.

This does not support asset management. For additional information on how to incorporate other assets (i.e. png, css), view the [Asset Management WebPack guide](https://webpack.js.org/guides/asset-management/).


## Instructions 

To use this boilerplate:

- Fork this repo, update the repository name, and clone locally
- Change the `name` property and other necessary information in the `package.json`
- Run `yarn` to install the dependencies
- Update the `title` in the `public/index.html`
- Start coding!

## Scripts

### Linting 

```shell
yarn lint
```

### Build

```shell
yarn build
```

Files are bundled into a directory named `dist`
This directory is excluded in the `.gitignore`

### Development 

Start the development server with:

```shell
yarn start
```

The development server has live reloading and will refresh automatically on files saves.
