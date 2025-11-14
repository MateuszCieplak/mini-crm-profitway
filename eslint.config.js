import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'indent': 'off',
      '@typescript-eslint/indent': ['error', 2, {
        'ignoredNodes': ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        'flatTernaryExpressions': true,
        'MemberExpression': 1,
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'VariableDeclarator': 1,
      }],
      'space-in-brackets': ['error', 'never'],
    }
  },
])
