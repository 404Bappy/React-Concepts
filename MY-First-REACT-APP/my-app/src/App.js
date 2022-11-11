import logo from './logo.svg';
import './App.css';

function App() {
  const product =[
    {name: 'Mobile', price:114000},
    {name: 'Laptop', price:214000},
    {name: 'watch', price:4000},
    {name: 'AirPod', price:114000},
    {name: 'Speaker', price:114000},
    {name: 'Clock', price:2000},

  ]
  return (
    <div className="App">
      {
        product.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/* <Product name="Mobile" price="114000"></Product>
      <Product name="Laptop" price="214000"></Product>
      <Product name="watch" price="4000"></Product>
      <Product name="AirPod" price="114000"></Product>
      <Product name="Speaker" price="114000"></Product> */}
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
