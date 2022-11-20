import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent Brand='SuZuki' Price="265k"></MyComponent>
      <MyComponent Brand='YeamaHA' Price="365k"></MyComponent>
      <MyComponent Brand='Honda' Price="465k"></MyComponent>
      <MyComponent Brand='TVS' Price="165k"></MyComponent>
      <MyComponent Brand='KTM' Price="565k"></MyComponent>
      <MyComponent Brand='KAWAsAKi' Price="865k"></MyComponent>


    </div>
  );
}

function MyComponent(props) {
  console.log(props);
  return (
    <div className="myCompo">
      <h1>Hey There ! This is : {props.Brand}</h1>
      <p className="paragraph">Price: {props.Price}</p>
    </div>
  )
}

export default App;
