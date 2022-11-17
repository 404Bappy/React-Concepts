import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
       {/* <Counter></Counter> */}
       <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    console.log('inside use Effect');
  }, [])
  return(
    <div>
      <h3>External users</h3>
    </div>
  )
}






function Counter(){
  const [count, setCount] = useState(0);
 const handleIncrase = () =>  setCount(count + 1);
 const handleDecrase = () =>  setCount(count - 1);
  return(
    <div className='count'>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrase}>Increase</button>
      <button onClick={handleDecrase}>Decrease</button>
    </div>
  )
}


function Product(props){
  return(
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

/*const products = [
  { name: 'Mobile', price: '16000'},
  { name: 'Speaker', price: '6000'},
  { name: 'AirBud', price: '8000'},
  { name: 'DSLR', price: '26000'},
  { name: 'Monitor', price: '10000'},

]*/





/*{
  products.map(products=> <Product name={products.name} price={products.price}></Product> )
}*/


{/* <Product name='Mobile' price='16000'></Product>
<Product name='Speaker' price='6000'></Product>
<Product name='AirBud' price='8000'></Product>
<Product name='DSLR' price='26000'></Product>
<Product name='Monitor' price='10000'></Product> */}

export default App;