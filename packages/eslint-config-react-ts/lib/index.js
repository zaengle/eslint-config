import js from '@eslint/js'
import globals from 'globals'
import eslintReact from '@eslint-react/eslint-plugin'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    ...eslintReact.configs['recommended-typescript'],
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...eslintReact.configs.recommended,
  },
  pluginJsxA11y.flatConfigs.recommended,
  pluginReactHooks.configs.flat['recommended-latest'] ?? pluginReactHooks.configs.flat.recommended ?? {
    plugins: { 'react-hooks': pluginReactHooks },
    rules: pluginReactHooks.configs.recommended.rules,
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'array-bracket-spacing': ['warn', 'never'],
      'arrow-parens': [
        'warn',
        'as-needed',
        {
          requireForBlockBody: true,
        },
      ],
      'comma-dangle': ['warn', 'always-multiline'],
      'eol-last': ['warn', 'always'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'object-curly-spacing': ['warn', 'always'],
      quotes: [
        'warn',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
      semi: ['warn', 'never'],
      'space-before-function-paren': [
        'error',
        {
          named: 'never',
          anonymous: 'always',
          asyncArrow: 'always',
        },
      ],
    },
  },
]
