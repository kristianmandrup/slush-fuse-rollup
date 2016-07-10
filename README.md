# slush-xfuse [![Build Status](https://secure.travis-ci.org/kristianmandrup/slush-xfuse.png?branch=master)](https://travis-ci.org/kristianmandrup/slush-xfuse) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-xfuse.png)](http://badges.enytc.com/for/npm/slush-xfuse)

Generate a [Fuse](https://www.fusetools.com) app with Gulp, Rollup, Babel.

The generator also has optional TypeScript & ClojureScript integration built in.

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
Which language will you use?
```

The following file structure is then created:

```bash
App.unoproj
Gulpfile.js
App.ux
package.json
README.md
```

### JavaScript

```bash
js/src/
  - app.js
  - api.js
```

The files in `js/src` are the source files to be used by the app. The gulp task will compile the source files to ES5 javascript in `/dist` on any modification.

- `gulp` (default) - compile ES6
- `gulp watch` - watch `/js/src` for changes and compile ES6 to ES5 in `/dist`

### TypeScript

```bash
ts/
  src/
    - app.ts
    - api.ts
  tsconfig.json
```

TypeScript support has been added as per the [TypeScript Gulp guide](http://www.typescriptlang.org/docs/handbook/gulp.html)

Start by making sure you have installed TypeScript globally

`$ npm install -g typescript`

TypeScript can then be used follows:
- `gulp ts` - compile TypeScript from `/ts/src` to `js/src`
- `gulp watch-ts` - watch `/ts/src` for changes and compile to ES5 in `js/src`

`tsconfig.json` can be used to configure TypeScript compilation. By default it is set to: `"target": "es5"`.
Using this approach you can mix and match javascript in `js/src` with typescript files in `/ts/src` seamlessly.

Note: Typescript can directly include `.js` files if needed.

### ClojureScript

*Experimental*

First [install leinigen](http://leiningen.org/)

```bash
cljs/
  src/
    /app
      - core.cljs
  project.clj
```

ClojureScript is by default set up with [lein-figwheel](https://github.com/bhauman/lein-figwheel/wiki/Quick-Start)
to allow for a fluid workflow with automatic browser updates

`core.cljs` exports a `hello` variable that is accessible from within the Fuse app.

Use `lein figwheel`

## Serving data
The `app.js` file exports an `api` variable by default, which references the API Object in `api.js`.

You can call `api.getData()` to return data served to the app, such as from a remote server via a socket connection or HTTP requests etc.

Hint: Customize the API Object to best suite your app!

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

See this list of [community packages](https://www.fusetools.com/docs/packages). A package is a library.

### Create Component
Fuse encourages breaking your app into components (classes) for several reasons:

Good practice. Component-orientation keeps your code base clean, testable, scaleable and easy to maintain.
Reuse. It is useful to create components to allow reusing pieces of UI and logic in multiple places.
Styling. Creating new classes based on primitives is the recommended way to create a consistent look and feel throughout your project.

To [create components](https://www.fusetools.com/docs/basics/creating-components) for your app:

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
