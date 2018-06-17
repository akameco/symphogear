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
`)

symphogear(cli.input[0])
