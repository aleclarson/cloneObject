
cloneObject = require ".."

describe "cloneObject()", ->

  it "defaults to shallow cloning", ->
    obj = a: 1, b: { c: 1 }
    clone = cloneObject obj
    expect(clone.a).toBe 1
    expect(clone.b).toBe obj.b

  it "can clone recursively if desired", ->
    obj = a: 1, b: { c: 1 }
    clone = cloneObject obj, true
    expect(clone.a).toBe 1
    expect(clone.b).not.toBe obj.b
    expect(clone.b.c).toBe 1

