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
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding:'10px',
    borderRadius: '10px'


  }
  return (
    <div style={myStyle}>
      <h1>Hi There This Is Arafat Bappy</h1>
      <p style={{color:'purple', fontWeight: 'bold'}}>Here is my component</p>
    </div>
  )
}

export default App;
