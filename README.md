# Zaengle ESLint Configs

This repo contains the ESLint configs that we use in our projects.

_Note_: We don't use Prettier in our projects, so none of these configs use the Prettier ESLint plugin.

## Base Config

The base config is designed for projects that do **not** utilize a JavaScript framework that can have distinct ESLint rules (e.g., Vue or React). It works well with projects that use Alpine.js or vanilla JavaScript.

[View the base config rules](packages/eslint-config-base/lib/.eslintrc.js).

### Usage

```js
// In .eslintrc.js

{
  extends: '@zaengle/eslint-config-base'
}
```
