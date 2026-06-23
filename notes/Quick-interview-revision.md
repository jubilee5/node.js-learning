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
