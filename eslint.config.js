// @ts-check
import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier/flat'
import tseslint from 'typescript-eslint'

export default defineConfig(
  // The sibling worktrees live under .claude/, so they never enter the lead's checks.
  globalIgnores([
    '.claude/',
    'references/',
    'review/',
    'dist/',
    'dist-pages/',
    'public/',
    'assets-src/',
    'test-results/',
    'playwright-report/',
  ]),

  {
    files: ['**/*.ts'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    files: ['**/*.{js,mjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        console: 'readonly',
        document: 'readonly',
      },
    },
  },

  prettier,
)
