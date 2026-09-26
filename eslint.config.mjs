import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { 
    ignores: ['node_modules/', 'playwright-report/', 'test-results/'] 
  },
  
  js.configs.recommended,
  ...tseslint.configs.recommended,
  
  {
    ...playwright.configs['flat/recommended'],
    files: ['/tests/**/*.spec.ts', '/tests/**/*.test.ts'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-focused-test': 'error', 
      'playwright/expect-expect': 'error', 
    },
  },
  
  {
    files: ['/**/*.ts', 'playwright.config.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json', 
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
    },
  }, 

  eslintConfigPrettier
);
