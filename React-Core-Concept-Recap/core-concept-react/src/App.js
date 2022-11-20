import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
  const [points, setPoints] = useState(1);
  const AddPoints = () => {
  
}
  return (
    <div className="myCompo">
      <h1>Hey There ! This is : {props.Brand}</h1>

      <button className='Btn' onClick={AddPoints}> Add Credit </button>
      <p className="paragraph">Price: {props.Price} , <span className='spn'>I have Points :{points} </span> </p>
      
    </div>
  )
}

export default App;
