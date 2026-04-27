const js = require('@eslint/js')
const globals = require('globals')
const pluginVue = require('eslint-plugin-vue')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

module.exports = [
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  ...pluginVue.configs['flat/vue3-recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
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
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: 1,
          multiline: 1,
        },
      ],
    },
  },
]
