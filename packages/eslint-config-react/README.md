# React ESLint Config

This is our ESLint config for projects that use React. Built on [ESLint React](https://eslint-react.xyz/) (`@eslint-react/eslint-plugin`).

## Usage

### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-react

# If not already installed
$ yarn add -D eslint @eslint-react/eslint-plugin eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### Add ESLint Config

```js
// eslint.config.js
const reactConfig = require('@zaengle/eslint-config-react')

module.exports = [
  ...reactConfig,
]
```
