# slush-xfuse [![Build Status](https://secure.travis-ci.org/kristianmandrup/slush-xfuse.png?branch=master)](https://travis-ci.org/kristianmandrup/slush-xfuse) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-xfuse.png)](http://badges.enytc.com/for/npm/slush-xfuse)

## Getting Started

Install `slush-xfuse` globally:

```bash
$ npm install -g slush-xfuse
```

## Usage examples

- Create app
- Create (fusepm) library
- Create component

### Create App

Create a new folder for your project:

```bash
$ mkdir my-fuse-app
```

Run the generator from within the new folder:

```bash
$ cd my-fuse-app
$ slush xfuse

What is the name of your app? my-app
...
Will you use TypeScript?
```

The following file structure is then created:

```bash
src/
  - app.js
  - server.js
App.unoproj
Gulpfile.js
App.ux
package.json
README.md
```

If TypeScript was selected

```bash
ts-src/
  - app.ts
  - server.ts
```

The files in `/src` are the source files to be used by the app. The gulp task will compile the `/src` files to ES5 compatible javascript in `/dist` on any modification.

- `gulp` (default) - compile ES6
- `gulp watch` - watch `/src` for changes and compile ES6 to ES5 in `/dist`

### TypeScript
TypeScript support has been added as per the [TypeScript Gulp guide](http://www.typescriptlang.org/docs/handbook/gulp.html)

Start by making sure you have installed TypeScript globally

`$ npm install -g typescript`

TypeScript can then be used follows:
- `gulp ts` - compile TypeScript from `/ts-src` to `/src`
- `gulp watch-ts` - watch `/ts-src` for changes and compile to `/src`

`tsconfig.json` can be used to configure TypeScript compilation. By default it is set to: `"target": "es5"`
Using this approach you can mix and match javascript in `/src` with typescript files in `/ts` seamlessly.

Note: Typescript can now also directly include `.js` files.

### Serving data
The `app.js` file exports a `server` variable by default, which references the Object exported by `server.js`.

You can call `server.api.getData()` to return data served to the app, such as from a remote server via a socket connection or HTTP requests etc.

Hint: Customize the `server.api` Object to best suite your app!

### Create Library
You can extract pieces of your application as libraries that can be reused across different apps.
Use the `xfuse:library` generator to create a [fusepm](https://github.com/bolav/fusepm) compatible library.
FusePM is a (community driven) package manager for Fuse.

```bash
$ slush xfuse:library
$ What is the name of your library? BigPanel
$ What is the description? A very big panel
$ Does the library have a view? yes

Generates the following project files:

- BigPanel.ux
- bigpanel_include.unoproj
```

### Create Component
To create components for your app.

```bash
$ slush xfuse:component
$ What is the name of your component? BigPanel
$ What is the description? A very big panel
$ Does the component view have a model? yes
```

The following file structure is created

```bash

components/
    - BigPanel.ux
    - BigPanel.js
```

The View will be auto-linked to the Model via:

`<JavaScript File="../dist/components/BigPanelModel.js"/>`

If you answer `no` to the last question, no model file will be created and the View will have no link to external javascript.

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/kristianmandrup/slush-xfuse/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/slush-xfuse/issues).

## License

The MIT License

Copyright (c) 2016, Kristian Mandrup

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
