## libuv & Async I/O

### Thread

Smallest unit of execution inside a process.

### JavaScript Nature

* Single-threaded
* Synchronous by default

### Synchronous System

Tasks execute one after another.

```text
Task1 → Task2 → Task3
```

### Asynchronous System

Tasks can be delegated and completed independently.

### JS Engine Components

#### Call Stack

* Executes code.
* Only one thing runs at a time.

#### Memory Heap

Stores:

* Variables
* Objects
* Functions

#### Garbage Collector

* Automatically frees unused memory.

### Why Node.js Feels Async?

Because Node.js uses:

* V8 Engine
* libuv
* Event Loop
* OS APIs

to handle async operations efficiently.

### Examples of Async Operations

* File Reading
* Network Requests
* Database Calls
* Timers

---

## Sync vs Async & setTimeout(0)

### Synchronous File Reading

```js
fs.readFileSync("./file.txt", "utf8");
```

### What Happens?

* Blocks the main thread.
* V8 waits until file reading finishes.
* No other JS code executes meanwhile.

### Why Avoid It?

* Slows down application.
* Blocks event loop.
* Poor performance in production.

### Asynchronous File Reading

```js
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(data);
});
```

### Benefits

* Doesn't block main thread.
* libuv handles operation.
* Application remains responsive.

### setTimeout(0)

```js
setTimeout(() => {
  console.log("Executed");
}, 0);
```

### Important

`0ms` does NOT mean immediate execution.

Execution happens only when:

1. Call Stack becomes empty.
2. Callback reaches Event Queue.
3. Event Loop pushes it back to Call Stack.

### Key Takeaway

```text
Call Stack > Event Loop > Callback Queue
```

Even `setTimeout(fn, 0)` waits until current synchronous code finishes.

---

