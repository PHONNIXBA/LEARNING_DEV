# LEARNING STATUS

## Current Focus

JavaScript fundamentals for Web3 development.

Current goal:
Build strong JavaScript logic before moving to real Web3 tools and Stellar SDK.

---

## Can Use Independently

### JavaScript Basics
- console.log()
- let / const
- Number / String / Boolean
- typeof
- Number.isNaN()
- Number.isInteger()
- Number.isSafeInteger()
- Number.isFinite()
- parseInt()
- parseFloat()

### Conditions
- if
- else if
- else
- comparison conditions
- logical operators

### Loops
- for
- while
- do...while
- break
- continue
- for...of
- forEach()

### Strings
- trim()
- toUpperCase()
- toLowerCase()
- includes()
- startsWith()
- endsWith()
- replace()
- replaceAll()
- slice()
- charAt()
- indexOf()
- length

### Arrays
- push()
- unshift()
- pop()
- shift()
- slice()
- splice()
- includes()
- indexOf()
- map()
- filter()
- find()
- one-dimensional arrays
- two-dimensional arrays
- arrays of objects

### Objects
- read object properties
- update object properties
- dynamic properties with object[key]
- understand object references

### Functions
- create functions
- parameters
- return values
- functions calling other functions
- helper functions
- coordinator functions

### Input
- readline/promises
- input.question()
- async function for keyboard input
- await input.question()
- input validation

---

## Web3 Logic I Can Build

- wallet connection simulation
- wallet balance display
- token transfer
- transfer validation
- network fee validation
- balance state updates
- token swap simulation
- swap validation
- swap preview / confirmation
- pool state updates
- transaction history
- transaction ID generation
- Web3 terminal menu
- user action → validation → state update → history flow

---

## Concepts I Understand

- find() returns the first matching element or undefined
- find() on an array of objects returns a reference to the original object
- changing that object changes the object inside the original array
- filter() returns a new array
- object elements inside a filtered array still reference the original objects
- = assigns a value
- === compares values
- validation should happen before state mutation
- failed transactions should not change state
- coordinator functions should reuse smaller functions
- read actions should not accidentally mutate state
- input amount must be different from swap output amount
- transactionHistory.length + 1 can be used as a simple transaction ID when transactions are never deleted

---

## Still Practicing

- designing larger systems with many functions
- deciding which logic should become a reusable helper
- designing clean coordinator functions
- separating reusable code from project-specific code
- structuring larger Web3 applications
- async/await across multiple functions

---

## Not Learned Yet

- JSON
- destructuring
- spread syntax
- JavaScript modules
- Promise
- new Promise()
- try/catch
- fetch()
- API integration
- BigInt
- Stellar SDK
- Soroban
- smart contracts
- frontend dApp development

---

## Current Personal Codebase

Status:
Not created yet.

Planned version:
Web3 Base v1

Purpose:
Store reusable JavaScript logic that I fully understand and can reuse across Web3 exercises and projects.

---

## Current Development Level

Stage:
JavaScript logic fundamentals → early Web3 application logic

I can build small Web3 simulations using JavaScript, arrays, objects, functions, validation, state updates, transaction history, and keyboard input.

I am not yet using a real blockchain, wallet SDK, API, or smart contract.