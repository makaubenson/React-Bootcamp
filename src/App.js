import ExpenseItem from "./components/ExpenseItem"; //import ExpenseItem Component

//root component
function App() {
  return (
    //JSX syntax makes it possible to return the html code below in a js file
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
