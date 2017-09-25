# `xstream-from-mutant`

```
npm install xstream-from-mutant
```

**Example:**

```js
import xsFromMutant from 'xstream-from-mutant'

const Value = require('mutant/value')
const obs = Value()
obs.set(true)

const stream = xsFromMutant(obs)
```
