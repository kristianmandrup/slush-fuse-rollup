# Slush-fuse-babel [![Build Status](https://secure.travis-ci.org/kristianmandrup/slush-fuse-rollup.png?branch=master)](https://travis-ci.org/kristianmandrup/slush-fuse-rollup) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-fuse-rollup.png)](http://badges.enytc.com/for/npm/slush-fuse-rollup)

## Getting Started

Install `slush-fuse-rollup` globally:

```bash
$ npm install -g slush-fuse-rollup
```

## Usage examples

- Create app
- Create component

### Create App

Create a new folder for your project:

```bash
$ mkdir my-fuse-app
```

Run the generator from within the new folder:

```bash
$ cd my-fuse-app
$ slush fuse-rollup

$ What is the name of your app? my-app
...
```

The following file structure is then created:

```bash

js/
    - app.js
    - server.js

App.unoproj
Gulpfile.js
MainView.ux
package.json
README.md
```

The files in `/js` are javascript files to be used by the app. The gulp task will compile the `/js` files to `/dist` on any modification.

### Serving data

The `app.js` file exports a `server` variable by default, which references the Object exported by `server.js`.

You can call `server.api.getData()` to return data served to the app, such as from a remote server via a socket connection or HTTP requests etc.

Hint: Customize the `server.api` Object to best suite your app!

### Create Component

```bash
$ slush fuse-rollup:component
$ What is the name of your component? BigPanel
$ What is the description? A very big panel
$ Does the component view have a model? yes
```

The following file structure is created

```bash

components/
    - BigPanelView.ux
    - BigPanelModel.js
```

The View will be auto-linked to the Model via:

`<JavaScript File="../dist/components/BigPanelModel.js"/>`

If you answer `no` to the last question, no model file will be created and the View will have no link to external javascript.

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/kristianmandrup/slush-fuse-rollup/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/slush-fuse-rollup/issues).

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

