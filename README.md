# Zaengle ESLint Configs

This repo contains the ESLint configs that we use in our projects.

_Note_: We don't use Prettier in our projects, so none of these configs use the Prettier ESLint plugin.

## Base Config

The base config is designed for projects that do **not** utilize a JavaScript framework that can have distinct ESLint rules (e.g., Vue or React). It works well with projects that use Alpine.js or vanilla JavaScript.

[View the base config rules](packages/eslint-config-base/lib/index.js).

### Usage

#### Install Dependencies

```bash
$ npm install -D @zaengle/eslint-config-base

# If not already installed
$ npm install -D eslint
```

#### Add ESLint Config

```js
// eslint.config.js
module.exports = [
  ...require('@zaengle/eslint-config-base'),
  // project overrides
]
```

## Vue Config

The Vue config is designed for projects that use Vue 3.

[View the Vue config rules](packages/eslint-config-vue/lib/index.js).

### Usage

#### Install Dependencies

```bash
$ npm install -D @zaengle/eslint-config-vue

# If not already installed
$ npm install -D eslint eslint-plugin-vue
```

#### Add ESLint Config

```js
// eslint.config.js
module.exports = [
  ...require('@zaengle/eslint-config-vue'),
  // project overrides
]
```

## Vue + TypeScript Config

The Vue + TypeScript config is designed for projects that use Vue 3 and TypeScript.

[View the Vue + TypeScript config rules](packages/eslint-config-vue-ts/lib/index.js).

## Usage

### Install Dependencies

```bash
$ npm install -D @zaengle/eslint-config-vue-ts

# If not already installed
$ npm install -D eslint eslint-plugin-vue
```

### Add ESLint Config

```js
// eslint.config.js
module.exports = [
  ...require('@zaengle/eslint-config-vue-ts'),
  // project overrides
]
```

## React Config

The React config is designed to detect the version of React that's being used.

[View the React config rules](packages/eslint-config-react/lib/index.js).

### Usage

#### Install Dependencies

```bash
$ npm install -D @zaengle/eslint-config-react

# If not already installed
$ npm install -D eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

#### Add ESLint Config

```js
// eslint.config.js
module.exports = [
  ...require('@zaengle/eslint-config-react'),
  // project overrides
]
```

## React + TypeScript Config

The React + TypeScript config is designed for projects that use React and TypeScript.

[View the React + TypeScript config rules](packages/eslint-config-react-ts/lib/index.js).

## Usage

### Install Dependencies

```bash
$ npm install -D @zaengle/eslint-config-react-ts

# If not already installed
$ npm install -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### Add ESLint Config

```js
// eslint.config.js
module.exports = [
  ...require('@zaengle/eslint-config-react-ts'),
  // project overrides
]
```

## Upgrading from v2 to v3

v3 drops ESLint legacy config format and requires ESLint 10.

### 1. Update Node.js

ESLint 10 requires Node.js `^20.19.0 || ^22.13.0 || >=24`.

### 2. Update the package

```bash
npm install -D @zaengle/eslint-config-[base|vue|vue-ts|react|react-ts] eslint@^10
```

Plugin packages (`eslint-plugin-vue`, `eslint-plugin-react`, etc.) are now bundled — remove them from your own `devDependencies`.

### 3. Replace `.eslintrc.js` with `eslint.config.js`

Before:
```js
// .eslintrc.js
module.exports = {
  extends: ['@zaengle/eslint-config-base'],
}
```

After:
```js
// eslint.config.js
module.exports = [
  ...require('@zaengle/eslint-config-base'),
  // project overrides go here as additional config objects
]
```

### 4. Delete `.eslintrc.js`

## Testing

Each config package has its own test suite. Tests use Node's built-in
`node:test` runner and ESLint's Node API to lint fixture files and assert
that expected rules fire (and clean fixtures produce no errors).

Run all suites:

```bash
npm install --legacy-peer-deps
npm test
```

Run a single package's suite:

```bash
npm test --workspace=@zaengle/eslint-config-react
```
