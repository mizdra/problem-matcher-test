// @ts-check

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  root: true,
  rules: {
    semi: 2,
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: { sourceType: "module" },
    },
  ],
};
