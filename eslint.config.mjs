import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'public/pagefind/**'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    // Wire the TypeScript parser into the Astro frontmatter (the astro-eslint
    // parser from the recommended preset stays; we only set the inner parser).
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
];
