
isConstructor = require "isConstructor"
PureObject = require "PureObject"
assertType = require "assertType"

module.exports = (obj, options = {}) ->

  assertType obj, [ Object, PureObject ]
  assertType options, Object

  if isConstructor obj, Object
    clone = {}
  else
    clone = Object.create null

  if options.recursive
    mergeDeep clone, obj

  else
    mergeShallow clone, obj

  return clone

mergeDeep = (clone, obj) ->

  for key, value of obj

    if isConstructor value, Object
      clone[key] = mergeDeep {}, value

    else
      clone[key] = value

  return clone

mergeShallow = (clone, obj) ->

  for key, value of obj
    clone[key] = value

  return clone
