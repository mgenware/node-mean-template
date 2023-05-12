# node-mean-template

Node.js TypeScript boilerplate project.

- Node v16+
- **ES Modules**
- TypeScript 3 project references for source and tests
- Scripts for development, testing, linting, and building
- Github Actions

> For Web components projects, see [node-mean-template-wc](https://github.com/mgenware/node-mean-template-wc)

## Folder structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source                          | ✅              | ❌              |
| `tests`      | TypeScript tests                           | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests                  | ❌              | ❌              |

## Build Instructions

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts via `npx daizong <script>` or `dz <script>` (if you installed [daizong](https://github.com/mgenware/daizong) globally).

### Development

- `dz dev` starts dev mode, which watches and compiles all source files including test files.
- `dz t` runs tests in dev mode.

You can keep two terminal tabs during development, one for `dz dev`, the other for `dz t`.

### Production mode

- `dz build` cleans, lints, compiles the project and runs tests.

### Other scripts

> You do not need to manually run these scripts. They are integrated into other scripts.

- `dz lint` lints the project using ESLint, auto triggered by `dz build`.
- `dz clean` deletes all build artifacts, auto triggered by `dz dev` or `dz build`.

### No `prepublishOnly`

The `prepublishOnly` `package.json` script was removed as we now recommend using [np](https://github.com/sindresorhus/np) to publish packages. `np` automatically runs `npm test`, which runs `dz build` before publishing.

### Badges

Replace `__PKG_NAME__` with your package name:

```
[![Build Status](https://github.com/mgenware/__PKG_NAME__/workflows/Build/badge.svg)](https://github.com/mgenware/__PKG_NAME__/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/__PKG_NAME__)
[![npm version](https://img.shields.io/npm/v/__PKG_NAME__.svg?style=flat-square)](https://npmjs.com/package/__PKG_NAME__)
[![Node.js Version](http://img.shields.io/node/v/__PKG_NAME__.svg?style=flat-square)](https://nodejs.org/en/)
```
