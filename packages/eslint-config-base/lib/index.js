const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
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
      'no-unused-vars': 'warn',
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
