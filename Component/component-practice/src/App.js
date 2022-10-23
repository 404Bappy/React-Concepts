import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}
function MyComponent() {
  return (
    <div>
      <h1>Hi There This Is Arafat Bappy</h1>
      <p>Here is my component</p>
    </div>
  )
}

export default App;
