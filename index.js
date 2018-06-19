// @flow
'use strict'
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const execa = require('execa')
const got = require('got')
const isUrl = require('is-url-superb')
const findCacheDir = require('find-cache-dir')
const findExec = require('find-exec')

const PLAYERS = [
  'mplayer',
  'afplay',
  'mpg123',
  'mpg321',
  'play',
  'omxplayer',
  'aplay',
  'cmdmp3',
]

function findPlayer(player /*: ?string */) {
  if (player && PLAYERS.includes(player)) {
    return player
  }
  const execPlayer /*: string | null */ = findExec(PLAYERS)
  if (execPlayer === null) {
    throw new Error("Couldn't find a suitable audio playe")
  }
  return execPlayer
}

function toHash(file /*: string */) {
  const shasum = crypto.createHash('sha1')
  shasum.update(file)
  return shasum.digest('hex')
}

async function fetchFile(file /*: string */) {
  if (!isUrl(file)) {
    return file
  }

  const filePath = path.join(
    findCacheDir({ name: 'symphogear', create: true }),
    toHash(file)
  )

  if (fs.existsSync(filePath)) {
    return filePath
  }

  const { body } = await got(file, { encoding: null })

  fs.writeFileSync(filePath, body)

  return filePath
}

const symphogear = async (
  file /*: string */,
  opts /*: { player?: string } */ = {}
) => {
  if (typeof file !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof file}`)
  }
  const player = findPlayer(opts.player)
  const result = await execa(player, [await fetchFile(file)])
  return result
}

module.exports = symphogear
