# [![npm-verison](https://img.shields.io/npm/v/alfred-femine.svg?style=flat-square)](https://www.npmjs.com/package/alfred-femine)

> Test your [Alfy](https://github.com/sindresorhus/alfy) workflows,Few changes have been made to [alfy-test](https://github.com/SamVerschueren/alfy-test) to support entry file or keyword, so that we can test multiple workflow inside one package.

## Install

```
$ npm install --save-dev alfy-testx
```

## Usage

```js
import test from 'ava'
import alfyTest from 'alfy-testx'

// const keyword = 'keyword'
const entry = 'path/main.js'
test(async t => {
  const alfy = alfyTest({ entry, keyword })
  const result = await alfy('workflow input')

  t.deepEqual(result, [
    {
      title: 'foo',
      subtitle: 'bar'
    }
  ])
})
```

## API

### alfyTest([options])

Returns an [alfy](#alfyinput) instance.

### options

### entry

Type: `string`<br>

The entry file of workflow

### keyword

Type: `string`<br>

The keyword of workflow

#### version

Type: `string`<br>
Default: `3.8.1`

Alfred version.

#### theme

Type: `string`<br>
Default: `theme.urlimport.153A3C58-B2D9-4F08-B342-B0BF7F6E8DE9`

Alfred theme.

#### theme_background

Type: `string`<br>
Default: `rgba(252,254,255,0.85)`

Background color.

#### theme_selection

Type: `string`<br>
Default: `rgba(255,255,255,0.26)`

Background color of a selected item.

#### theme_subtext

Type: `string`<br>
Default: `1`

Show the item subtitle.

### alfy(...input)

Returns a `Promise` that returns the `items` of the workflow.

#### input

Type: `string[]`

Workflow input.

#### .config

The [alfy config](https://github.com/sindresorhus/alfy#config) instance.

#### .cache

The [alfy cache](https://github.com/sindresorhus/alfy#cache) instance.

## Examples

* [alfred-femine](https://github.com/FeMiner/alfred-femine) - A collection of front end tools

## License

MIT © [zxing](https://www.zxing.top)
