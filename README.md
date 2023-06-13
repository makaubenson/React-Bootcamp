# React.js

- React is a javascript library for buildimg user interfaces.
- To break it down:

  - Its a client side js library.
  - Its all about building modern reactive user interfaces for the web.

- React makes building complex,interactive and reactive user interfaces simpler.
- React is all about `components`. This is because all user interfaces in the end are made up of components.

## Why React instead of JavaScript and it can still achieve the same thing.

- Js allows devs to write code in an imperative approach. It supports both imperative and declarative programming approaches, although its primary paradigm is imperative. In an imperative approach, developers write code that explicitly specifies the step-by-step instructions for the computer to follow.
- React allows devs to write code in a declarative,component focused approach.With React, developers describe the structure and behavior of their user interfaces by creating reusable components. These components encapsulate a specific piece of functionality and can be composed together to build complex UIs.

## BUilding Single-Page-Applications(SPAs)

- When working with React we often build single page applications.
- In a single page application, the server only sends one HTML page after which React takes over and controls the UI.

## Components

- Reusable building blocks in your user interfaces
- combination of css,js and html code
- Its not amust to re-use a component to confirm its a component.
- Components are the building blocks of React applications.

### Why Components?

- Allows for:
  - Reusability (Helps us ensure Dont Repeat yourself principle)
  - Separation of Concerns (Dont do too many things in one and the same place(function))

### How is a Component Built?

- By combining HTML,CSS and JavaScript.
- Basically we build our own custom HTML elements.

### React uses Declarative Approach

- This means, you only need to define the desired target state(s) and let react figure out the actuve JavaScript DOM instructions.

- React code is just javascript code.

- Index.js is the first file that is executed when the app is run.

```
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

- `createRoot` method creates the main entry point of the overall user interface. Tells React this react app/interface should be placed on the loaded interface.

## Javascript XML (JSX)

- JSX stands for JavaScript XML. It is an extension syntax used in React, a popular JavaScript library for building user interfaces. JSX allows you to write HTML-like code within JavaScript, making it easier to define and render components.
- With JSX, you can define the structure and appearance of UI elements, such as elements, components, and their properties, in a more declarative and intuitive way. It combines the power of JavaScript and XML-like syntax, enabling you to write dynamic and interactive user interfaces.
- Here's an example of JSX code:

```
import React from 'react';

const App = () => {
  const name = 'John Doe';

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to JSX.</p>
    </div>
  );
};

export default App;
```

- In the above example, the JSX code is enclosed in parentheses and is written within a JavaScript function component called App. It defines a simple UI with a heading and a paragraph. The curly braces {} allow embedding JavaScript expressions within JSX, as seen in {name} where the name variable is dynamically rendered.

- JSX is transpiled into regular JavaScript function calls by tools like Babel, and React uses these JavaScript function calls to create and update the actual DOM elements in the browser.

- A component is React is just a javsscript function. Only that it returns JSX code.

- lowercase elements are built in elements while elements starting with uppercase caharacter are custom defined.
- JSX is a syntax extension to JavaScript. It is not a language in itself.
