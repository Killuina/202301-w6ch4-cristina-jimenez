module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      rules: {
        "new-cap": "off",
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "no-implicit-coercion": "off",
      },
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
