## Diving into Node.js GitHub

### Node.js Architecture

Node.js consists of:

```text
JavaScript Code
       ↓
      V8
       ↓
    Node APIs
       ↓
     libuv
       ↓
 Operating System
```

### Important Components

#### V8 Engine

* Executes JavaScript.
* Handles Call Stack and Memory Heap.

#### libuv

* Core library behind Node.js async behavior.
* Handles:

  * File System operations
  * Networking
  * Timers
  * Thread Pool

### Key Learning

JavaScript is single-threaded, but Node.js achieves concurrency using **libuv**.

---