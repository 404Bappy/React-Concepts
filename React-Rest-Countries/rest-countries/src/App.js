import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
//Create Component to load countries//

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data));

  }, []);
  return (
    <div>
      <h2>Traveling Around The World..!!</h2>
      <h4>Countries Available : {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2> Name: {props.name}</h2>
      <p>Capital : {props.capital}</p>
    </div>
  )
}


export default App;
