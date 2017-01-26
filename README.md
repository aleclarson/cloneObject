
# cloneObject v1.0.2 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
cloneObject = require "cloneObject"

# Shallow cloning.
clone = cloneObject obj

# Recursive cloning.
clone = cloneObject obj, { recursive: yes }
```

**NOTE:** As a safety precaution, objects created with `Object.create(null)`
are only cloned if you pass them directly to `cloneObject`!
