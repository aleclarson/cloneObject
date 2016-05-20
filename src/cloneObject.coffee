
PureObject = require "PureObject"
assertType = require "assertType"
isType = require "isType"

module.exports = (obj, options = {}) ->

  assertType options, Object

  if isType obj, Object
    clone = {}

  else if PureObject.test obj
    clone = Object.create null

  else
    throw TypeError "Expected an Object or PureObject!"

  if options.recursive
    mergeDeep clone, obj

  else
    mergeShallow clone, obj

  return clone

mergeDeep = (clone, obj) ->

  for key, value of obj

    if isType value, Object
      clone[key] = mergeDeep {}, value

    else
      clone[key] = value

  return clone

mergeShallow = (clone, obj) ->

  for key, value of obj
    clone[key] = value

  return clone
