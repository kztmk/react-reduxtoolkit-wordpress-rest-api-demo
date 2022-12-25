module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:testing-library/react', 'plugin:jest-dom/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'testing-library', 'jest-dom'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function' | 'function-declaration'
    }],
    'no-param-reassign': ['error', {
      props: false
    }]
  }
};