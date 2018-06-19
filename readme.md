# symphogear

[![Build Status](https://travis-ci.org/akameco/symphogear.svg?branch=master)](https://travis-ci.org/akameco/symphogear)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> sound for cli

## Install

```
$ yarn add symphogear
```

## Usage

```js
const symphogear = require('symphogear')

await symphogear('music.mp3')
```

## API

### `symphogear(file: string, opts?: {player?: string})`

#### file

Type: `string`

support file or url.

#### options

##### player

Type: `string`<br>

### Available audio players to check.

- mplayer
- afplay
- mpg123
- mpg321
- play
- omxplayer
- aplay
- cmdmp3

## CLI

```
$ npm install --global symphogear
```

```
$ symphogear --help

	Usage
	  $ symphogear [file]

	Examples
	  $ symphogear さな.mp3

	  $ symphogear http://sanabutton.ojaru.jp/sound/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E3%81%A4%E3%81%8E%E3%81%A4%E3%81%8E%E3%81%A4%E3%83%BC%E3%81%8E06.mp3
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/symphogear/commits?author=akameco "Code") [📖](https://github.com/akameco/symphogear/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/symphogear/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
