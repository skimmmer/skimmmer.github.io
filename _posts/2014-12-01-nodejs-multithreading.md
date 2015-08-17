---
title: Node.js Asynchronous Compute-Bound Multithreading
layout: project
category: electrical engineering
pictures: [dynamic.png]
class: UT EE382V
tags: [Javascript, Node.js, V8, C++]
links: { paper: "papers/dynamic.pdf" }
---
We propose a system for asynchronous multithread- ing in Node.js. By using annotations and extending
V8 and Node.js, common asynchronous paradigms can be accelerated past the single-threaded model of
Node.js. Our system extends the ECMA 5.1 directive syntax to allow for compute-bound annotations.
Additionally, V8 is modified to allow Node.js to run a function in a separate V8 instance (Isolate).
Upon completion of the compute-bound function, a callback is executed within the main event loop of
Node.js. In our initial results, we recorded at least a 3x improvement (6x maximum) in speedup over
a grouping of V8 and custom compute-bound benchmarks on a 4-core Intel Core-i5 system.
