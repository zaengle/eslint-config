const js = require('@eslint/js')
const globals = require('globals')
const pluginReact = require('eslint-plugin-react')
const pluginJsxA11y = require('eslint-plugin-jsx-a11y')
const pluginReactHooks = require('eslint-plugin-react-hooks')

module.exports = [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginJsxA11y.flatConfigs.recommended,
  // react-hooks: use recommended-latest if available, else manual
  pluginReactHooks.configs['recommended-latest'] ?? {
    plugins: { 'react-hooks': pluginReactHooks },
    rules: pluginReactHooks.configs.recommended.rules,
  },
  {
    settings: { react: { version: 'detect' } },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'array-bracket-spacing': ['warn', 'never'],
      'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],
      'comma-dangle': ['warn', 'always-multiline'],
      'eol-last': ['warn', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      quotes: ['warn', 'single', { allowTemplateLiterals: true }],
      semi: ['warn', 'never'],
      'space-before-function-paren': ['error', { named: 'never', anonymous: 'always', asyncArrow: 'always' }],
    },
  },
]
