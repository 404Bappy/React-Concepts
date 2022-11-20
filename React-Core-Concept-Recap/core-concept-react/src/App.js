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

function MyComponent(){
  return(
    <div className="myCompo">
      <h1>Hey There ! This is My Component</h1>
      <p>I Can Write My Won component</p>
    </div>
  )
}

export default App;
