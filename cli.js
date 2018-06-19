#!/usr/bin/env node
// @flow
'use strict'
const meow = require('meow')
const symphogear = require('.')

const cli = meow(`
	Usage
	  $ symphogear [file]

	Examples
	  $ symphogear さな.mp3

	  $ symphogear http://sanabutton.ojaru.jp/sound/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E3%81%A4%E3%81%8E%E3%81%A4%E3%81%8E%E3%81%A4%E3%83%BC%E3%81%8E06.mp3
`)

symphogear(cli.input[0])
