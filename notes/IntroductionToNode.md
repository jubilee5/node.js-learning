# Node.js  Revision Notes 

## Introduction to Node.js

### What is Node.js?

* Node.js is a **JavaScript Runtime Environment** built on Chrome's **V8 Engine**.
* Allows JavaScript to run **outside the browser**.
* Maintained by the OpenJS Foundation.
* Follows an **event-driven, non-blocking I/O architecture**.

### History

* Created by **Ryan Dahl** in **2009**.
* Initially experimented with **SpiderMonkey**, later switched to **V8**.
* Originally called **Web.js**, later renamed to **Node.js**.
* **NPM** was introduced in **2010**.

### Why Node.js?

* Traditional servers were blocking.
* Node.js introduced **non-blocking I/O**.
* Can handle many requests with fewer threads.

### Key Terms

* **JavaScript Engine:** Executes JavaScript code.
* **V8 Engine:** Google's JS engine written in C++.
* **Runtime Environment:** Provides everything needed to run JS outside browsers.

---

## JS on Server

### What is a Server?

* A remote computer that provides services/resources to clients.
* Communicates using network requests.

### IP Address

* Unique identifier of a device on a network.

### V8 Engine

* Written in **C++**.
* Compiles JavaScript into machine code.
* Can be embedded inside C++ applications.

### Node.js Internals

* Node.js = **V8 Engine + Node APIs + Modules**
* Enables JavaScript to run on servers.

### ECMAScript

* Standard specification for JavaScript.
* Followed by engines like:

  * V8
  * SpiderMonkey
  * Chakra

---

## Writing Code

### Installation Check

```bash
node -v
npm -v
```

### Node REPL

REPL = **Read → Evaluate → Print → Loop**

```bash
node
```

Used to:

* Run JS directly in terminal
* Test snippets quickly
* Experiment with Node APIs

### Important

* Node.js uses the **V8 Engine** behind the scenes.
* Similar to browser console but runs in Node environment.

---


