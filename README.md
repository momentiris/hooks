# React hooks

[![](https://github.com/momentiris/hooks/workflows/Release/badge.svg)](https://github.com/Iteam1337/hooks/actions?workflow=Release)
[![npm version](https://badge.fury.io/js/%40momentiris%2Fhooks.svg)](https://badge.fury.io/js/%40momentiris%2Fhooks)

This is a collection of hooks that I made for fun.

## Installation

```bash
npm install @momentiris/hooks
```

## Available Hooks

- [useDynamicHeight](#useDynamicHeight)
- [useInputFocus](#useInputFocus)

---

### [useDynamicHeight](#useDynamicHeight)

Takes a ref and uses `useState` and returns the `scrollHeight` of given element.
I wanted to make this for dropdown functionality with a dynamic height value of the element being toggled.

```typescript
useDynamicHeight(nodeRef: React.RefObject<any>): number
```

#### Example

```js
import React from 'react'
import { useDynamicHeight } from '@momentiris/hooks'

export const Component = () => {
  const nodeRef = React.useRef(null)
  const height = useDynamicHeight(nodeRef)

  console.log(height) // 500
  return <div ref={nodeRef} style={{ height: 500 }} />
}
```

### [useInputFocus](#useInputFocus)

Auto focuses an input element.

```typescript
useInputFocus(): React.RefObject<HTMLInputElement>
```

#### Example

```js

import React from 'react'
import { useInputFocus } from '@momentiris/hooks'

export const Input = () => {
  const nodeRef = useInputFocus()

  return <input ref={nodeRef}> />
}
```
