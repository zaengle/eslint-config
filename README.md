# Zaengle ESLint Configs

This repo contains the ESLint configs that we use in our projects.

_Note_: We don't use Prettier in our projects, so none of these configs use the Prettier ESLint plugin.

## Base Config

The base config is designed for projects that do **not** utilize a JavaScript framework that can have distinct ESLint rules (e.g., Vue or React). It works well with projects that use Alpine.js or vanilla JavaScript.

[View the base config rules](packages/eslint-config-base/lib/.eslintrc.js).

### Usage

#### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-base

# If not already installed
$ yarn add -D eslint
```

#### Add ESLint Config

```js
// In .eslintrc.js

{
  extends: '@zaengle/eslint-config-base'
}
```

## Vue Config

The Vue config is designed for projects that use Vue 3.

[View the Vue config rules](packages/eslint-config-vue/lib/.eslintrc.js).

### Usage

#### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-vue

# If not already installed
$ yarn add -D eslint eslint-plugin-vue
```

#### Add ESLint Config

```js
// In .eslintrc.js

{
  extends: '@zaengle/eslint-config-vue'
}
```

## Vue + TypeScript Config

The Vue + TypeScript config is designed for projects that use Vue 3 and TypeScript.

[View the Vue + TypeScript config rules](packages/eslint-config-vue-ts/lib/.eslintrc.js).

## Usage

### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-vue-ts

# If not already installed
$ yarn add -D eslint eslint-plugin-vue
```

### Add ESLint Config

```js
// In .eslintrc.js

{
  extends: '@zaengle/eslint-config-vue-ts'
}
```

## React Config

The React config is designed to detect the version of React that's being used.

[View the React config rules](packages/eslint-config-react/lib/.eslintrc.js).

### Usage

#### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-react

# If not already installed
$ yarn add -D eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

#### Add ESLint Config

```js
// In .eslintrc.js

{
  extends: '@zaengle/eslint-config-react'
}
```
