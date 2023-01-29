# React BootCamp

- This is React Version : `^18.0.0`

## What is React.js

- A client-side Js library for building user interfaces.
- Lean and focused Component based UI library.
- React focuses on components, so for more functionality, we use third party packages.
- React makes building complex,interactive and reactive user interfaces simpler.

### It Builds?

- Interactive UIs,
- Nice transitions instantly
- Modern UIs

## Why Need React in addition to JavaScript since js can do most of what React can do?

- Js includes too much code for a simple task compared to react.
- Makes building modern complex UIs simple.

## Building Single-Page Applications(SPAs)

- Makes a web with multiple page act as a single page since it displays different pages of the web to the user as if it requested them each time user clicked the page, however it doesn't, it basically just changed the view, or what the user can see.

## React.js alternatives

- `Angular.js` - framework. It embraces typescript. Needed for complex, bigger projects.
- `Vue.js` - Framework, less features that Angular.js, but more than React.js.

## Course Outline in Summary

- Basics and Foundation
- Advanced Concepts(building for production)
- Summaries and Refreshers

## Components

- React is all about `components`.
- All user interfaces in the end are made up of components.

- `Components` are re-usable building blocks in your user interface. Not a must to re-use a component for it to be a component, it's just one of its traits that it is `re-usable`.
- Each component has `one specific task` that it focuses on.

### Why Components?

- Re-usability `(Don't Repeat Yourself)`
- Separation of concern `(Don't do too many things in one and the same place(function))`

## How is a Component Built?

- By combining `HTML,CSS, and Js`.

- React uses a `Declarative Approach` for building the components. `i.e` With React you will not tell `React` that a certain HTML element should be created and inserted into a specific place on UI as you would be doing with `vanilla Js`. `Instead you will define the desired target state(s) and let React figure out the actual Js DOM Instructions.`

## Understanding File Structure.

- React code is just JS code.
- `index.js` holds code that initially executed on load of react app.
- `index.css` holds css styling for the react app.

- JSX stands for Javascript XML

## How React Works

- It is advisable to put new components into new files.
- In react we may end up with 100s of files since there are many components in a react app.
- `App.js` will be used as the `root component`.

- A React App has a `root` component which holds other components.
- ![image]
- A component in react is just a js function.

#### Note:

- Custom Components must Start with a Capital letter e.g `ExpenseItem` in
  `function ExpenseItem() {
  return <h2>Expense Item!</h2>;
}`
- With uppercase, React understands the element as a custome component.
- React understands all lowercase elements as built in HTML elements.
- `Rule`: You must have One roote element per return statement.

## Re-usability

- We can make components re-usable using `parameters` and a concept called `props`
