# React + TypeScript ESLint Config

This is our ESLint config for projects that use React and TypeScript. Built on [ESLint React](https://eslint-react.xyz/) (`@eslint-react/eslint-plugin`).

## Usage

### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-react-ts

# If not already installed
$ yarn add -D eslint @eslint-react/eslint-plugin @typescript-eslint/eslint-plugin typescript-eslint eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### Add ESLint Config

```js
// eslint.config.js
const reactTsConfig = require('@zaengle/eslint-config-react-ts')

module.exports = [
  ...reactTsConfig,
]
```
