// cSpell:disable
module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    // basic
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // es6
    'no-var': 'error',
    // ts
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // vue-setup
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // vue
    'vue/component-tags-order': [
      'error',
      {
        order: ['route', 'script', 'template', 'style']
      }
    ],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    complexity: ['off', 11],
    eqeqeq: ['error', 'allow-null'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': ['error', 'before'],
    // prettier
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'none',
        stylelintIntegration: true,
        eslintIntegration: true
      }
    ]
  }
};
