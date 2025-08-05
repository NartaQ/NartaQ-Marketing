import { nextJsConfig } from "@investi/eslint-config/next-js";

export default [
  ...nextJsConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [".next/**"],
  },
];