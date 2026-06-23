# Quick Interview Revision

### Node.js

* JS Runtime built on V8.
* Non-blocking, event-driven architecture.

### V8

* Executes JavaScript.
* Written in C++.

### NPM

* Package Manager for Node.

### Module System

* require()
* module.exports

### JavaScript

* Single-threaded
* Synchronous by default

### libuv

* Enables asynchronous I/O.
* Handles thread pool and event loop.

### Call Stack

* Executes JS code.

### Memory Heap

* Stores variables and objects.

### Event Loop

* Moves callbacks from queues to call stack.

### Sync vs Async

* Sync = Blocking
* Async = Non-blocking

### Avoid in Production

```js
fs.readFileSync()
```

### Prefer

```js
fs.readFile()
```



### What is Tokenization?

* Converting source code into tokens.

### What is AST?

* Tree representation of JavaScript code.

### Why do Syntax Errors occur?

* Invalid syntax prevents AST creation.

### What is Ignition?

* V8's interpreter.
* Converts AST → Bytecode.

### What is Bytecode?

* Intermediate code executed by V8.

### What is TurboFan?

* V8's optimizing compiler.
* Converts Bytecode → Optimized Machine Code.

### What is JIT Compilation?

* Runtime compilation of code into machine code.

### What is Hot Code?

* Frequently executed code paths.

### What is Deoptimization?

* Happens when optimization assumptions fail.

### Performance Tip

```text
Consistent Data Types = Better V8 Optimizations
```

### Complete V8 Flow

```text
JavaScript Code
      ↓
Lexical Analysis
      ↓
Tokenization
      ↓
Syntax Analysis
      ↓
AST
      ↓
Ignition
      ↓
Bytecode
      ↓
TurboFan
      ↓
Optimized Machine Code
```
