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
- In React, composition is a fundamental concept that allows you to combine and reuse components to build complex user interfaces. It promotes a modular and hierarchical approach to UI development.
- Composition involves creating components that encapsulate specific functionality or UI elements and then combining them together to form more complex components. This allows you to build upon existing components, reuse code, and create a component hierarchy that reflects the structure of your application.
- Here are a few examples of composition in React:
#### Function Composition:
- Function composition is a technique where multiple functions are combined to create a new function. In React, you can use function composition to create higher-order components (HOCs) or custom hooks.
```
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Component is rendered:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

const MyComponent = (props) => {
  // component logic
};

const LoggedComponent = withLogging(MyComponent);

// Now, when rendering LoggedComponent, it will log the component's name.
```
#### Component Composition:
- Component composition involves combining smaller components to create more complex components. This is achieved by nesting components within one another, passing data through props, and using them to build the desired UI structure.
```
const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <Button onClick={() => console.log('Button clicked')} label="Click Me" />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card title="Welcome" content="This is a sample card." />
    </div>
  );
};
```
- In the above example, the Card component is composed by combining the Button component and other HTML elements. The Button component itself can be reused in other parts of the application.
#### Render Props:
- Render props is a pattern in React where a component accepts a function as a prop, which it then calls and passes data to. This allows for dynamic and flexible rendering behavior.
```
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
};

const App = () => {
  return (
    <div>
      <h1>Mouse Tracker</h1>
      <MouseTracker
        render={(position) => (
          <p>
            Mouse position: {position.x}, {position.y}
          </p>
        )}
      />
    </div>
  );
};
```
- In this example, the MouseTracker component encapsulates the logic for tracking mouse movement. It accepts a render prop, which is a function that receives the current mouse position as an argument. The component then calls this function and passes the position data, allowing the rendered output to be customized by the parent component.
- These examples demonstrate different aspects of composition in React, showcasing how components can be combined and reused to build flexible and maintainable UIs. Composition is a powerful concept in React that enables code modularity, reusability, and extensibility.

### Listening and Handling Events on React.js
#### Events
- An event is an action that takes place when a user interacts with a program. For example, a click event occurs when a user clicks on a button, a change event occurs when a user changes the value of an input field, and a scroll event occurs when a user scrolls through a page.
#### What is an event handler?
- An event handler is a callback routine that operates asynchronously once an event takes place. It dictates the action that follows the event. The programmer writes a code for this action to take place.
#### How to listen to events in ReactJS?
- To listen to events in ReactJS, you can use the `onClick`, `onChange`, `onBlur`, `onFocus`, and other event handlers. For example, the following code listens to the onClick event on a button and calls the handleClick function when the button is clicked:
```
const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Click me</button>
);
```
#### How to handle events in ReactJS?
- The event handler function is passed an event object as a parameter. The event object contains information about the event, such as the type of event, the target element, and the event's properties. You can use the event object to access this information and take action accordingly.
- For example, the following code handles the onClick event on a button by changing the text of the button:
```
const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Click me</button>
);

const handleClick = (e) => {
  e.target.innerText = "I've been clicked!";
};
```
- Event handlers are functions, so they can be passed as props to components.
- Event handlers are executed asynchronously, so they should not modify the DOM directly.
- You can use the `stopPropagation()` and `preventDefault()` methods on the event object to stop the event from bubbling up the DOM hierarchy or preventing the default action from being taken.
### State

- State is a mutable data that can be used to track the internal state of a component. It is often used to store data that changes over time, such as the user's current input or the number of button clicks.
- State is managed by the useState hook in functional components and the this.state property in class components.
- The useState hook takes two arguments: the initial value of the state variable and a function to update the state variable. The update function takes a new value for the state variable as an argument.
- The this.state property is an object that contains the current value of the state variable. The state variable can be updated by calling the this.setState() method.
- When the state of a component changes, React will re-render the component. This ensures that the UI always reflects the current state of the component.
#### Here are some tips for using state in ReactJS:

- Use state sparingly. State should only be used to track data that changes over time. If the data does not change, it should be stored in props.
- Keep state simple. State variables should be simple and easy to understand. They should not contain complex logic or calculations.
- Use state to improve the user experience. State can be used to improve the user experience by making the UI more dynamic and interactive. For example, you can use state to keep track of the user's current input or the number of button clicks.
#### useState Hook
- The useState hook is a React hook that allows you to manage state in functional components.
- It is a powerful tool that allows you to track state in functional components without having to write a class component.
- The useState hook takes two arguments: the initial value of the state variable and a function to update the state variable. 
- The update function takes a new value for the state variable as an argument.
- The useState hook returns an array. 
- The first element of the array is the current value of the state variable and the second element is the function to update the state variable.

- ![state import](https://github.com/makaubenson/React-Bootcamp/assets/59168713/2f953ae8-bc10-4091-afd1-b47f68fb2461)

![useState](https://github.com/makaubenson/React-Bootcamp/assets/59168713/c5ee4211-cabb-4066-a379-8f08b0ae6fd5)

- Note: React hooks must only be called inside components. Also, they cant be called inside nested functions.

#### More About useState hook
- useState registers a state per component basis. Only a single component experiences state kept by useState. if we have 4 components and useState is used to update title, only the component that has been clicked changes title.

### State can be updated in many ways!
- Thus far, we update our state upon user events (e.g. upon a click).
- That's very common but not required for state updates! 
- You can update states for whatever reason you may have.
- React schedules state updates, it doesnt perform them instantly.
- Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.
- When depending on previous state to update another state, use the syntaxt below
```
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle:event.target.value}
        })
```

#### Two Way Binding
- Two-way binding is a concept in web development that allows data to flow bidirectionally between a form input field and a data model. It enables changes made in the form input to update the underlying data model, and conversely, changes made to the data model reflect in the form input.
- In the context of forms, two-way binding is particularly useful as it provides a seamless way to keep the form and the associated data synchronized. When a user enters or modifies data in an input field, the changes are immediately reflected in the data model. Similarly, if the data model is updated programmatically, the form input fields automatically display the updated values.
- Here's an example in React to illustrate how two-way binding can be achieved:
```
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}

### Lifting The State Up

![lifting state up](https://github.com/makaubenson/React-Bootcamp/assets/59168713/450e8567-2ea1-4924-94d0-8a99060c8def)

![lifting state up 2](https://github.com/makaubenson/React-Bootcamp/assets/59168713/126e4e2b-3733-49dc-a6e5-ff6596e947b9)

![lifting state 3](https://github.com/makaubenson/React-Bootcamp/assets/59168713/07563be6-dd52-49dd-b01e-86b4f9004f6d)




```
- In this example, we have a form with an input field for the user's name. The name state variable holds the current value of the input field. By binding the value attribute of the input field to the name state, we establish the initial value and ensure that any changes in the input field update the state.
- The `handleInputChange` function is triggered whenever the input value changes. It updates the name state with the new value, ensuring that the form and the state stay synchronized.
- Finally, the name state is displayed within the <p> element, allowing us to see the updated value as the user types.
