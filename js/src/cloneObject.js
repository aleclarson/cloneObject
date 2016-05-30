var PureObject, assertType, isConstructor, mergeDeep, mergeShallow;

isConstructor = require("isConstructor");

PureObject = require("PureObject");

assertType = require("assertType");

module.exports = function(obj, options) {
  var clone;
  if (options == null) {
    options = {};
  }
  assertType(obj, [Object, PureObject]);
  assertType(options, Object);
  if (isConstructor(obj, Object)) {
    clone = {};
  } else {
    clone = Object.create(null);
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
    if (isConstructor(value, Object)) {
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
