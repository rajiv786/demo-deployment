import './App.css';

function App() {
  return (
    <div className="App">
     
      <h1>Staging</h1>
      <h1>{process.env.REACT_APP_React_Value}</h1>
    </div>
  );
}

export default App;
