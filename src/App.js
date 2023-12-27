import "./App.css";

function App() {
  return (
    <div className="App min-h-[100vh] bg-neutral-50">
      <header className="App-header text-center bg-zinc-200 py-8">
        <div className="container">
          <h1 className="text-6xl font-bold text-sky-900">todos</h1>
        </div>
      </header>
      <main id="main" className="container flex-grow"></main>
      <footer className="bg-zinc-900 text-white py-4 text-sm text-center font-mono">
        <div className="container">
          <span>Made with React {`</>`}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
