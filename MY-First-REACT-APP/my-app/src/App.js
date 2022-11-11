import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product name="Mobile" price="114000"></Product>
      <Product name="Laptop" price="214000"></Product>
      <Product name="watch" price="4000"></Product>
      <Product name="AirPod" price="114000"></Product>
      <Product name="Speaker" price="114000"></Product>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border: '3px solid yellow'
  }
  return(
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}
export default App;
