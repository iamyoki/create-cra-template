# Create Cra Template

<p align="center">
A cli tool to generate cra-template from current create-react-app project.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-cra-template">
    <img alt="npm" src="https://img.shields.io/npm/v/create-cra-template?color=slateblue&label=create-cra-template&logo=npm&style=for-the-badge">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/create-cra-template?color=palegreen&style=for-the-badge">
  </a>
</p>
<p align="center">
  <a href="https://github.com/iamyoki/create-cra-template">
    <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/iamyoki/create-cra-template?color=royalblue&label=github&logo=github&style=for-the-badge">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/iamyoki/create-cra-template?color=violet&style=for-the-badge">
    <img alt="lines of code" src="https://img.shields.io/tokei/lines/github/iamyoki/create-cra-template?color=gold&style=for-the-badge">
  </a>
</p>

## Getting Started

1. Inside your own create-react-app project:
```shell
npx create-cra-template
# or
yarn create cra-template

# or install globally
yarn global add create-cra-template
cct
```

`template.json` and `template` will be generated. You can also edit `template.json` manually.

2. [Make sure your package.json name is `cra-template-[YOUR_TEMPLATE_NAME]`](https://create-react-app.dev/docs/custom-templates#building-a-template)

Example:
```json
{
  "name": "cra-template-ui"
}
```

3. Publish to npm
```shell
npm login
npm publish
```

4. Use your own template

Try to create a new project from your template:
```shell
npx create-react-app --template [YOUR_TEMPLATE_NAME]
# or
yarn create react-app --template [YOUR_TEMPLATE_NAME]
```

🎉 That's it!