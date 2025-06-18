import './App.css';

function App() {
let b = (10 + (15+12)/2)/2;

let a = ((14.25*3)+(12*3)+(13.13*3)+(6.7*2)+(17*3)+(12.75*2)+(16.5*1))/17;

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is a simple React application.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>

          <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <h1 className="text-5xl font-bold text-rose-600">{a}--{b}</h1>
    </div>
      <footer>
        <p>© 2023 My React App</p>
      </footer>
    </div>
  );
}

export default App;
