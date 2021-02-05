# Donate button in github
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/nanda987?locale.x=en_GB)

#If You Like My Plugin Please donate.

# GrapesJS Shape Divider

This plugin adds a Shape divider block with different svg shapes.

## Summary

- Plugin name: `grapesjs-shape-divider`
- Blocks
  - `Shape Divider`

## Options

| Option             | Description                 | Default                        |
| ----------------   | --------------------------- | ------------------------------ |
| `Shape`            | `Shape level`               | `Tilt`                         |
| `category`         | `Category name`             | `Selection`                    |
| `defaultTagName`   | `TagName by default`        | `svg`                          |
| `Flip vertically`  | `Vertical position`         | `vertical`                     |
| `Flip horizontally`|  `Horizontally`             | `horizontal`                   |

## Download

- CDN
  - `https://unpkg.com/grapesjs-shape-divider`
- NPM
  - `npm i grapesjs-shape-divider`
- GIT
  - `git clone https://github.com/Abhisheknanda1344463/grapesjs-shape-divider`

## Usage

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-shape-divider.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container : '#gjs',
    ...
    plugins: ['grapesjs-shape-divider']
  });
</script>
```

## Development

Clone the repository

```sh
$ git clone https://github.com/Abhisheknanda1344463/grapesjs-shape-divider
$ cd grapesjs-shape-divider
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```

## License

BSD 3-Clause
