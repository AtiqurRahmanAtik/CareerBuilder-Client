module.exports = {
  root: true,
  env: { browser: true,node:true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
},


  
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react/prop-types": "off",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
