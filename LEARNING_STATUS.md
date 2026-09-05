# LEARNING STATUS

## 1. CURRENT DIRECTION

Primary learning outcome:

> Become a product-thinking developer who can read, understand, trace, modify, and eventually design real software and Web3 projects.

Current self-study strategy:

TypeScript-first
+
Repository-first

Default learning flow:

READ
→ MAP
→ COPY
→ RUN
→ TRACE
→ EXPLAIN WHY
→ MODIFY
→ REBUILD CRITICAL PARTS
→ TRANSFER


---

## 2. CURRENT JAVASCRIPT FOUNDATION

### Can Use

- console.log
- Node.js terminal input with readline/promises
- async function
- await in familiar input flows
- if / else
- loops
- break / continue
- Number conversion
- String conversion
- Boolean conversion
- typeof
- Number.isNaN
- Number.isInteger
- Number.isSafeInteger
- Number.isFinite
- Math methods
- parseInt
- parseFloat
- common String methods
- arrays
- array methods
- for...of
- forEach
- map
- filter
- find
- 2D arrays
- objects
- arrays of objects
- function parameters
- return
- function composition


---

## 3. JAVASCRIPT BEHAVIOR UNDERSTOOD

### Object References

Understands that:

- find() returns the existing object from the original array
- modifying that returned object mutates the object in the original array
- filter() creates a new array but object elements still reference the same underlying objects


### Array Return Behavior

Understands:

- find() with no match → undefined
- filter() with no match → []


### Dynamic Object Keys

Can access values such as:

```js
wallet.balances[asset]