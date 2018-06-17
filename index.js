// @flow
'use strict'
const execa = require('execa')
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
  const execPlayer = findExec(PLAYERS)
  if (execPlayer === null) {
    throw new Error("Couldn't find a suitable audio playe")
  }
  return execPlayer
}

const symphogear = async (
  file /*: string */,
  opts /*: { player?: string } */ = {}
) => {
  if (typeof file !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof file}`)
  }

  const player = findPlayer(opts.player)
  const result = await execa(player, [file])
  return result
}

module.exports = symphogear
