module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', jsx: 'true' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh', 'jsx-a11y', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/jsx-no-target-blank': 'off',
    'comma-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
