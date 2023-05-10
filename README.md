# DevFactory Chapter 2 by TimaTech

## Overview

This repository contains code for the various topics covered in the second chapter of the DevFactory program by TimaTech, which focuses on TypeScript, React, and AWS.

## Folder Structure

Typescript/
├── src/
│   ├── Lessons/
│   │   ├── ArrowFunctions.ts
│   │   ├── AsynchProgramming.ts
│   │   ├── basicTypes.ts
│   │   ├── conditionalProg.ts
│   │   ├── constVsLet.ts
│   │   ├── structuralTyping.ts
│   │   └── TypeAddertion.ts
│   ├── utils/
│   │   ├── Input.ts
│   ├── app.ts
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

## Prerequisites

* Node is installed
* Typescript is installed in your project
* You understand functional and OOP programming

## Topics Covered
The second chapter of the DevFactory program covers the following topics:

* Basic types (Never, any, Promise, string, number, etc...)
* Structural typing and OOP
* Type manipulation (conversion, type query, type assertion)
* Functions 101 conditional programmings (if/else, loop)
* Arrow functions and callbacks
* Asynchronous code

Each of these topics is explored in depth with corresponding code examples.


## Folder Structure

The code is organized into folders based on the topic they cover. Each folder contains code examples and exercises related to the corresponding topic. Additionally, the dist folder contains the TypeScript code that has been converted into JavaScript.

## Scripts

The package.json file contains the following scripts: (run these in the terminal)

`npm run test` to run test suite for this file (not enabled)
`npm run start`  to compile the TypeScript code and runs the main app.(in App.ts; **this is where you'll implement your BudgetApp**)
`npm run TSCompile` to compile your TS code into JS (you can see the equivalent JS code in the dist folder-genetated after running this command)

**To run a particular Lesson file (for assignments)**
`npm run TSComplie`
And
`node dist/Lessons/<FileName>.js`
