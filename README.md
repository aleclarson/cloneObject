
# cloneObject 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
cloneObject = require "cloneObject"

# Shallow cloning.
clone = cloneObject obj

# Recursive cloning.
clone = cloneObject obj, yes
```

**NOTE:** Objects created with `Object.create(null)` are not traversed or cloned!
