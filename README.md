<h1 align="center">
  <a href="https://rjoydip.github.io/what-is">
    What Is
  </a>
</h1>

<h2 align="center">What is in javascript?</h2>

<p align="center">
  <a href="https://travis-ci.org/rjoydip/what-is"><img src="https://travis-ci.org/rjoydip/what-is.svg?branch=master" alt="travis"></a>
</p>

[[toc]]

# Javascript

## What is javascript?

JavaScript often abbreviated as `JS`, is a `high-level`, `interpreted programming` language. It is a language which is also characterized as `dynamic`, `weakly typed`, `prototype-based` and `multi-paradigm`.

Alongside HTML and CSS, JavaScript is one of the three core technologies of the `World Wide Web`. JavaScript enables `interactive` web pages and this is an essential part of web applications. The vast majority of websites use it, and all `major web browsers` have a dedicated JavaScript engine to execute it.

As a `multi-paradigm` language, JavaScript supports `event-driven`, `functional`, and imperative (including `object-oriented` and `prototype-based`) programming styles. It has an API for working with `text`, `arrays`, `dates`, `regular expressions`, and `basic manipulation` of the `DOM`, but the language itself does not include any `I/O`, such as `networking`, `storage`, or `graphics` `facilities`, relying for these upon the host environment in which it is embedded. [see more](https://en.wikipedia.org/wiki/JavaScript)

### Tags: ***javascript, high-level, interpreted programming, dynamic, weakly typed, prototype-based, multi-paradigm, event-driven, object-oriented, prototype-based***

# Node JS

## What is node.js?

A `JavaScript runtime` built on `Chrome's V8` JavaScript `engine`. Node.js is an `asynchronous` `event driven`. It is designed to build `scalable` network applications. The `architecture` design has been influenced by, systems like `Ruby's Event Machine` or `Python's Twisted`. The event model presents an `event loop` as a runtime construct instead of as a library. It is designed without `threads`, doesn't mean you cannot take advantage of multiple cores in your environment. Child processes can be spawned by using our `child_process.fork()` API, and are designed to be easy to communicate with. Built upon that same interface is the `cluster` module, which allows you to share `sockets` between processes to enable `load balancing` over your cores.

### Tags: ***javaScript runtime, chrome's V8, engine, asynchronous, event driven, scalable, architecture, event loop, cluster, sockets, load balancing***

# Angular.js

## What is angular.js?

AngularJS is a JavaScript-based open-source `front-end` web application `framework` mainly maintained by `Google` and by a community of individuals and corporations to address many of the challenges encountered in developing `single-page` applications.

### Tags: ***front-end, framework, google, single-page***

# Angular

## What is Angular?

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative `templates`, `dependency injection`, `end to end tooling`, and `integrated` best practices to solve development challenges. Angular empowers developers to build applications that live on the `web`, `mobile`, or the `desktop`

### Tags: ***templates, dependency injection, end to end tooling, integrated, web, mobile, desktop***

# React.js

## What is react.js?

React is a `declarative`, `efficient`, and `flexible` JavaScript `library` for building `user interfaces`. It lets you compose complex UIs from small and isolated pieces of code called `“components”`

### Tags: ***declarative, efficient, flexible, library, user interfaces, components***

# Vue.js

## What is Vue.js?

Vue (pronounced /vjuː/, like view) is a `progressive` framework for building user interfaces. Unlike other `monolithic` frameworks, Vue is designed from the ground up to be `incrementally adoptable`. The core library is focused on the `view layer` only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated `Single-Page Applications` when used in combination with modern tooling and supporting `libraries`.

### Tags: ***progressive, monolithic, incrementally adoptable, view layer, single-page, applications, libraries***

# Typescript

## What is typescript?

`TypeScript` is a language for `application-scale` JavaScript. TypeScript adds `optional types`, `classes`, and `modules` to JavaScript. TypeScript supports tools for large-scale JavaScript applications for `any browser`, for `any host`, on `any OS`. TypeScript compiles to `readable`, `standards-based` JavaScript. [see more](https://www.typescriptlang.org)

### Tags: ***typeScript, application-scale, optional types, classes, modules, any browser, any host, any OS, readable, standards-based***

# Rx.js

## What is Rx.js?

`Reactive` programming is an `asynchronous` programming paradigm concerned with `data streams` and the `propagation` of change. RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using `observables` that makes it easier to compose `asynchronous` or `callback-based` code

### Tags: ***reactive, asynchronous, data streams, propagation, observables, callback-based***

## Operators

`Operators` are functions that build on the `observables` foundation to enable `sophisticated` manipulation of `collections`. For example, RxJS defines operators such as map(), `filter()`, `concat()`, and `flatMap()`.

Operators take `configuration` options, and they return a function that takes a source observable. When executing this returned function, the operator `observes` the source observable’s emitted values, transforms them, and returns a new observable of those transformed values.

### Tags: ***operators, observables, collections, filter(), concat(), flatMap(), configuration, observes***

## Observer

An `interface` for a consumer of `push-based` `notifications` delivered by an Observable.

```ts
interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```

An object conforming to the Observer interface is usually given to the `observable.subscribe(observer)` method, and the Observable will call the Observer's `next(value)` method to provide notifications. A well-behaved Observable will call an Observer's `complete()` method exactly once or the Observer's `error(err)` method exactly once, as the last notification delivered.

### Tags: ***interface, push-based, notifications***

# Others

## What is ReactiveX?

An `API` for `asynchronous` programming with `observable` `streams`. [see more](http://reactivex.io)

### Tags: ***api, asynchronous, observable, streams***

**License**

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Joydip Roy (rjoydip)](https://github.com/rjoydip) has waived all copyright and related or neighboring rights to this work.
