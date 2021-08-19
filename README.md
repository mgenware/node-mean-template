# node-mean-template

Node.js TypeScript boilerplate project.

- Node v14+
- **ES modules**
- Uses TypeScript 3 project references for source and test projects
- Commands for development, testing, linting, clean and build

> - For CommonJS modules, go to [this branch](https://github.com/mgenware/node-mean-template/tree/cjs)
> - For Web components projects, see [node-mean-template-wc](https://github.com/mgenware/node-mean-template-wc)

## Folder structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source files                    | ✅              | ❌              |
| `tests`      | TypeScript tests files                     | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests files            | ❌              | ❌              |

## Build Instructions

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts through daizong via `yarn r <script>` or `npm run r <script>`.

### For development

- `yarn r dev` starts the development mode, which watches and compiles all source files including tests files.
- `yarn r t` runs tests in development mode (requires build files).

You can keep two terminal tabs during development, one for `yarn r dev`, the other for `yarn r t`.

### For production

- `yarn r build` cleans, lints, compiles the project and runs tests.

### Other scripts

You do not need to manually run these scripts, they are already integrated into other scripts.

- `yarn r lint` lints the project using ESLint, auto triggered by `yarn r build`.
- `yarn r clean` deletes all build artifacts, auto triggered by `yarn r dev` or `yarn r build`.

### No `prepublishOnly`

The `prepublishOnly` script was removed, we recommend using [np](https://github.com/sindresorhus/np) to publish packages, which will automatically run `yarn test`, which runs `yarn r build` before publishing.

### Badges

Please replace `__PKG_NAME__` with your package name:

```
[![Build Status](https://github.com/mgenware/__PKG_NAME__/workflows/Build/badge.svg)](https://github.com/mgenware/__PKG_NAME__/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/__PKG_NAME__)
[![npm version](https://img.shields.io/npm/v/__PKG_NAME__.svg?style=flat-square)](https://npmjs.com/package/__PKG_NAME__)
[![Node.js Version](http://img.shields.io/node/v/__PKG_NAME__.svg?style=flat-square)](https://nodejs.org/en/)
```
