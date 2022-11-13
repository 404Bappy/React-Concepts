import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Product name='Mobile' price='16000'></Product>
        <Product name='Speaker' price='6000'></Product>
        <Product name='AirBud' price='8000'></Product>
        <Product name='DSLR' price='26000'></Product>
        <Product name='Monitor' price='10000'></Product>
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

export default App;
