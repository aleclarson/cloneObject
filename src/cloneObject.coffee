
PureObject = require "PureObject"
assertType = require "assertType"
Either = require "Either"
isType = require "isType"

Cloneable = Either(Object, PureObject)

module.exports =
cloneObject = (obj, options = {}) ->

  assertType obj, Cloneable
  assertType options, Object

  clone =
    if isType obj, Object
    then {}
    else Object.create null

  if options.recursive
  then mergeDeep clone, obj
  else mergeShallow clone, obj

mergeDeep = (clone, obj) ->

  for key, value of obj
    clone[key] =
      if isType value, Object
      then mergeDeep {}, value
      else value

  return clone

mergeShallow = (clone, obj) ->

  for key, value of obj
    clone[key] = value

  return clone
