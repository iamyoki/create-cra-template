# Create Cra Template

<p align="center">
  <img width="200" src="https://i.postimg.cc/RFkYXs3B/Dayflow-Black-Cat.png" alt="brand">
</p>

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

- [Create Cra Template](./packages/create-cra-template)
- Templates
  - [cra-template-popular](./packages/templates/cra-template-popular)
  - [cra-template-ui](./packages/templates/cra-template-ui)

## Usage

Inside your own create-react-app project:

```shell
npx create-cra-template
# or
yarn create cra-template
```

Or install globally

```shell
yarn global add create-cra-template
cct
# or create-cra-template
```

`template.json` and `template` will be generated. You can also edit `template.json` manually.

## Publish to npm

[Make sure your package.json name is `cra-template-[YOUR_TEMPLATE_NAME]`](https://create-react-app.dev/docs/custom-templates#building-a-template)

Example:

```json
{
  "name": "cra-template-ui"
}
```

```shell
npm login
npm publish
```

## Use your own template

```shell
npx create-react-app --template [YOUR_TEMPLATE_NAME]
# or
yarn create react-app --template [YOUR_TEMPLATE_NAME]
```

## CLI details

There two commands `create-cra-template` and `cct`.

Run `cct --help` to see more details.

```shell
cct

 🕹 📤 A cli tool to generate cra-template from current create-react-app
 project.

Commands:
  cct                Generate template                                 [default]
  cct clear [--all]  Clear previous exports

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
  -c, --clear    Clear previous exports before generation              [boolean]
```

## Use in Node

Below is a simple example of using `create-cra-template` in your project:

```js
const {
  generateTemplateJson,
  generateTemplateFiles,
  clearPackageFileField,
  clearTemplateFiles
} = require('create-cra-template')

const rootDir = process.cwd()

;(async()=>{
  await clearPackageFileField(rootDir)
  await clearTemplateFiles(rootDir)
  await generateTemplateJson(rootDir)
  await generateTemplateFiles(rootDir)
})()
```

## Built-in templates

> ### [cra-template-popular](./packages/templates/cra-template-popular)
>
> Work in progress...

> ### [cra-template-ui](./packages/templates/cra-template-ui)
>
> Work in progress...

---

<p align="center">🎉 That's it! Enjoy your own template.</p>
