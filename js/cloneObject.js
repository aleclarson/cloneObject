var PureObject, assertType, isType, mergeDeep, mergeShallow;

PureObject = require("PureObject");

assertType = require("assertType");

isType = require("isType");

module.exports = function(obj, options) {
  var clone;
  if (options == null) {
    options = {};
  }
  assertType(obj, [Object, PureObject]);
  assertType(options, Object);
  clone = isType(obj, Object) ? {} : Object.create(null);
  if (options.recursive) {
    return mergeDeep(clone, obj);
  }
  return mergeShallow(clone, obj);
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

//# sourceMappingURL=map/cloneObject.map
