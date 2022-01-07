# node-mean-template

Node.js TypeScript boilerplate project.

- Node v14+
- **ES Modules**
- Uses TypeScript 3 project references for source and tests
- Scripts for development, testing, linting, clean and build

> For Web components projects, see [node-mean-template-wc](https://github.com/mgenware/node-mean-template-wc)

## Folder structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source files                    | ✅              | ❌              |
| `tests`      | TypeScript tests files                     | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests files            | ❌              | ❌              |

## Build Instructions

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts via `npx daizong <script>` or `dz <script>` (if you installed [daizong](https://github.com/mgenware/daizong) globally).

### Development

- `dz dev` starts the development mode, which watches and compiles all source files including tests files.
- `dz t` runs tests in development mode (requires build files).

You can keep two terminal tabs during development, one for `dz dev`, the other for `dz t`.

### Production mode

- `dz build` cleans, lints, compiles the project and runs tests.

### Other scripts

You do not need to manually run these scripts, they are already integrated into other scripts.

- `dz lint` lints the project using ESLint, auto triggered by `#build`.
- `dz clean` deletes all build artifacts, auto triggered by `#dev` or `#build`.

### No `prepublishOnly`

The `prepublishOnly` script was removed as we recommend using [np](https://github.com/sindresorhus/np) to publish packages, which will automatically run `npm test`, which runs `dz build` before publishing.

### Badges

Please replace `__PKG_NAME__` with your package name:

```
[![Build Status](https://github.com/mgenware/__PKG_NAME__/workflows/Build/badge.svg)](https://github.com/mgenware/__PKG_NAME__/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/__PKG_NAME__)
[![npm version](https://img.shields.io/npm/v/__PKG_NAME__.svg?style=flat-square)](https://npmjs.com/package/__PKG_NAME__)
[![Node.js Version](http://img.shields.io/node/v/__PKG_NAME__.svg?style=flat-square)](https://nodejs.org/en/)
```
