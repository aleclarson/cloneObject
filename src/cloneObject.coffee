
assertValid = require "assertValid"

cloneObject = (obj, recursive) ->
  assertValid obj, "object"
  assertValid recursive, "boolean?"

  clone =
    if obj.constructor isnt null
    then {}
    else Object.create null

  if recursive
  then recursiveClone clone, obj
  else Object.assign clone, obj

module.exports = cloneObject

#
# Internal
#

recursiveClone = (clone, obj) ->

  for key, value of obj
    clone[key] =
      if value and value.constructor is Object
      then recursiveClone {}, value
      else value

  return clone
