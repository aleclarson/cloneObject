var assertType, cloneObject, deepMerge, isType, shallowMerge;

assertType = require("assertType");

isType = require("isType");

module.exports = cloneObject = function(obj, isDeep) {
  var clone;
  if (isDeep == null) {
    isDeep = false;
  }
  assertType(obj, Object);
  assertType(isDeep, Boolean);
  clone = {};
  if (isDeep) {
    deepMerge(clone, obj);
  } else {
    shallowMerge(clone, obj);
  }
  return clone;
};

deepMerge = function(clone, obj) {
  var key, value;
  for (key in obj) {
    value = obj[key];
    if (isType(value, Object)) {
      clone[key] = deepMerge({}, value);
    } else {
      clone[key] = value;
    }
  }
  return clone;
};

shallowMerge = function(clone, obj) {
  var key, value;
  for (key in obj) {
    value = obj[key];
    clone[key] = value;
  }
  return clone;
};

//# sourceMappingURL=../../map/src/cloneObject.map
