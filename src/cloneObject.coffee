
assertType = require "assertType"
isType = require "isType"

module.exports =
cloneObject = (obj, isDeep = no) ->

  assertType obj, Object
  assertType isDeep, Boolean

  clone = {}

  if isDeep
    deepMerge clone, obj
  else shallowMerge clone, obj

  return clone

deepMerge = (clone, obj) ->
  for key, value of obj
    if isType value, Object
      clone[key] = deepMerge {}, value
    else clone[key] = value
  return clone

shallowMerge = (clone, obj) ->
  for key, value of obj
    clone[key] = value
  return clone
