
cloneObject = require "../src/cloneObject"

describe "cloneObject()", ->

  it "defaults to shallow cloning", ->
    obj = a: 1, b: { c: 1 }
    clone = cloneObject obj
    expect clone.b
      .toBe obj.b

  it "can clone recursively if desired", ->
    obj = a: 1, b: { c: 1 }
    clone = cloneObject obj, { recursive: yes }
    expect clone.b
      .not.toBe obj.b
