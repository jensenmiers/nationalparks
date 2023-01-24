import './App.css';

function App() {

  fetch("http://localhost:3001/parks")
  .then(res => res.json())
  .then(console.log)


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
