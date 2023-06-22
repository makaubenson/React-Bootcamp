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

#### Test 1

```
import React from 'react';
import ExerciseComponent from "./ExerciseComponent";
// don't change the Component name "App"
export default function App() {
        return (
    <div>
    <p>Todo: solve exercise</p>;
        <ExerciseComponent></ExerciseComponent>
    </div>
  );
}
```

```
import React from 'react';
// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!

function ExerciseComponent(){
   return <p>First exercise - done!</p>
}

export default ExerciseComponent;
```

### Re-using components

- To re-use components, we use a component called `props`.

#### Props

- "props" is short for "properties" and refers to the data passed from a parent component to its child component(s).
- Props are a way to communicate and share information between components in a React application.

- When you define a component in React, you can specify props as arguments in the component's function or class declaration.
- The parent component can then pass values to these props when rendering the child component.

- Here's an example of a functional component in React that accepts props:

```
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

- In the above example, the Greeting component receives a single prop called name.
- When the component is used elsewhere in the application, the parent component can provide a value for this prop:

```
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return <Greeting name="John Doe" />;
};

export default App;
```

- In this case, the Greeting component will render "Hello, John Doe!" as its output because the name prop is passed with the value "John Doe" in the parent component's usage.

- `Props are read-only and should not be modified within the child component`.
- They are used to pass data and configuration from parent components to their children, allowing for a hierarchical and modular structure in React applications.

#### Exercise: Passing Data via "props"

```
You're working on the UI prototype for an online shop and your task is to output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.

The final UI should look like this:

The two product items should use the same component (<Product />) but output different data (title, price & description). Data should be passed to the components (and output there) via props.

The first product item is expected to display the following information:

Title: Product 1

Price: 10

Description: First product

The second product item is expected to display the following information:

Title: Product 2

Price: 20

Description: Second product
```

- App.js

```
import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title="Product 1" price="10"description="First product"></Product>
             <Product title="Product 2" price="20"description="Second product"></Product>
        </div>
    );
}
```

Product.js

```
import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
```

### Composition

- The concept of building UI from smaller building blocks is called `composition`.
