var cloneObject;

cloneObject = require("../src/cloneObject");

describe("cloneObject()", function() {
  it("defaults to shallow cloning", function() {
    var clone, obj;
    obj = {
      a: 1,
      b: {
        c: 1
      }
    };
    clone = cloneObject(obj);
    return expect(clone.b).toBe(obj.b);
  });
  return it("can clone deeply if desired", function() {
    var clone, obj;
    obj = {
      a: 1,
      b: {
        c: 1
      }
    };
    clone = cloneObject(obj, true);
    return expect(clone.b).not.toBe(obj.b);
  });
});

//# sourceMappingURL=../../map/spec/cloneObject.map
