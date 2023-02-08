# Base ESLint Config

This is our base ESLint config for projects that do **not** use a JavaScript framework that can have distinct ESLint rules (e.g., Vue, React). It works well with projects that use Alpine.js or vanilla JavaScript.

## Usage

### Install Dependencies

```bash
$ yarn add -D @zaengle/eslint-config-base

# If not already installed
$ yarn add -D eslint
```

### Add ESLint Config

```js
// In .eslintrc.js

{
  extends: '@zaengle/eslint-config-base'
}
```
