
PureObject = require "PureObject"
assertType = require "assertType"
Either = require "Either"
isType = require "isType"

Cloneable = Either(Object, PureObject)

module.exports = (obj, options = {}) ->

  assertType obj, Cloneable
  assertType options, Object

  clone =
    if isType obj, Object then {}
    else Object.create null

  if options.recursive
    return mergeDeep clone, obj

  return mergeShallow clone, obj

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
