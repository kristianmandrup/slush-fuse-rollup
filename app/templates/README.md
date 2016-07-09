# slush-fuse-rollup
This [Fuse](https://www.fusetools.com/) project is configured with [Gulp](http://gulpjs.com/), [Rollup](http://rollupjs.org/) and [Babel](https://babeljs.io/) into your  workflow, allowing you to use ES2015+ features in your Fuse app.

## Prerequisites
1. Install [Node.js and npm](https://nodejs.org/en/) if you haven't already.
2. Install gulp globally: `npm install -g gulp`
3. Clone this repo: `git clone https://github.com/kristianmandrup/slush-fuse-rollup.git`
4. Inside the project folder, run `npm install` to fetch dependencies.

## Watch and rollup app.js
Run `gulp watch` to watch for changes to files in the `/src` folder.
When a change occurs, rollup and babel will run, and your transpiled, concatenated JS file will end up as `dist/app.js`. This will in turn trigger an update in the Fuse preview simulator if it's running.

The entry point is `dist/app.js`, which means that only this file will be able to export objects to fuse.

## Watch component model files

Use `npm watch` to enable auto compilation of component model files in `/components` to `dist/components`.

## Babel support

The files in `/src` are the source files to be used by the app. The gulp task will compile the `/src` files to ES5 compatible javascript in `/dist` on any modification.

- `gulp` (default) - compile ES6 via Babel
- `gulp watch` - watch `/src` for changes and compile ES6 to ES5 in `/dist`

### TypeScript
TypeScript support has been added as per the [TypeScript Gulp guide](http://www.typescriptlang.org/docs/handbook/gulp.html)

Start by making sure you have installed TypeScript and Gulp CLI globally

`$ npm install -g typescript gulp-cli`

TypeScript can then be used follows:
- `gulp ts` - compile TypeScript from `/ts` to `/src`
- `gulp watch-ts` - watch `/ts` for changes and compile to `/src`

### Manual steps

First rename `/src` folder to `/ts-src`

`$ mv src ts-src`

Rename `.js` files in new `/ts-src` folder to `.ts`.

`$ find ts-src/*.js -iname "*.js" -exec bash -c 'mv "$0" "${0%\.js}.ts"' {} \;`

*TODO: This should be automated!*

Using this approach you can mix and match javascript in `/src` with typescript files in `/ts` seamlessly. Note: Typescript can now also directly include `.js` files.

### Serving data

The `app.js` file exports a `server` variable which references the Object exported by `server.js`.

You can call `server.api.getData()` to return data served to the app:
- local fake/stub data
- remote server data via a socket connection or HTTP request etc.

Hint: Customize the `server.api` Object to best suite your app!

## Create components

`$ slush fuse-rollup:component` to create components for your app.

## Install Fuse modules

Use [fusepm](https://github.com/kristianmandrup/fusepm) to install fuse modules (libraries):

```bash
$ fusepm list
$ fusepm install <module>
```

## License

[MIT](LICENSE)
