var PureObject, assertType, isType, mergeDeep, mergeShallow;

PureObject = require("PureObject");

assertType = require("assertType");

isType = require("isType");

module.exports = function(obj, options) {
  var clone;
  if (options == null) {
    options = {};
  }
  assertType(options, Object);
  if (isType(obj, Object)) {
    clone = {};
  } else if (PureObject.test(obj)) {
    clone = Object.create(null);
  } else {
    throw TypeError("Expected an Object or PureObject!");
  }
  if (options.recursive) {
    mergeDeep(clone, obj);
  } else {
    mergeShallow(clone, obj);
  }
  return clone;
};

mergeDeep = function(clone, obj) {
  var key, value;
  for (key in obj) {
    value = obj[key];
    if (isType(value, Object)) {
      clone[key] = mergeDeep({}, value);
    } else {
      clone[key] = value;
    }
  }
  return clone;
};

mergeShallow = function(clone, obj) {
  var key, value;
  for (key in obj) {
    value = obj[key];
    clone[key] = value;
  }
  return clone;
};

//# sourceMappingURL=../../map/src/cloneObject.map
