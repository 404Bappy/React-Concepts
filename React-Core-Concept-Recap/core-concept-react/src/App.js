import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      
      
      
      
      <MyComponent Brand='SuZuki' Price="265k"></MyComponent>
      <MyComponent Brand='YeamaHA' Price="365k"></MyComponent>
      <MyComponent Brand='Honda' Price="465k"></MyComponent>
      <MyComponent Brand='TVS' Price="165k"></MyComponent>
      <MyComponent Brand='KTM' Price="565k"></MyComponent>
      <MyComponent Brand='KAWAsAKi' Price="865k"></MyComponent>


    </div>
  );
}
function LoadUsers(){
  const[users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h1>Users Loaded : {users.length}</h1>
      {
        users.map(user => <User name = {user.name} phone = {user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Call me Baby!! {props.phone}</p>
    </div>
  )
}




function MyComponent(props) {
  const [points, setPoints] = useState(1);
  const AddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
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
