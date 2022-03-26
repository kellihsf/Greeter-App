import "./App.css";
import Greeter from "./components/Greeter";
import nameArray from "./data.js";

// name === prop
function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      {
        // for every name inside of the nameArray, return array
        nameArray.map((name) => (
          <Greeter name={name.name} age={name.age} />
        ))
      }
    </div>
  );
}

export default App;
