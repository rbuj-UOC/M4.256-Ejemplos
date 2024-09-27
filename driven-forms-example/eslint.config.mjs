import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from 'eslint-config-prettier';
import html from 'eslint-plugin-html';
import markdown from 'eslint-plugin-markdown';

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    files: ['**/*.html'],
    plugins: { html }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  ...markdown.configs.recommended,
];
