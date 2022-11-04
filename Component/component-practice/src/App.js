import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent name='Arafat' brand="Apple" price="156K"></MyComponent>
      <MyComponent name='bappy' brand="Nokia" price="80k"></MyComponent>
      <MyComponent name='kuddus' brabd="Samsung" price="120k"></MyComponent>
      <MyComponent name='jobbar' brand="Tesla" price="20k"></MyComponent>
    </div>
  );
}
function MyComponent(props) {
  const [points, setPoints] = useState(1);

  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'


  }

  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>Hi There This Is {props.name}. i like {props.brand}</h1>
      <h4>Asking Money price: {props.price}, I have points:{points}</h4>
      <p style={{ color: 'purple', fontWeight: 'bold' }}>Here is my component</p>
      <button onClick={handleAddPoints}>Add Points</button>
    </div>
  )
}

export default App;
