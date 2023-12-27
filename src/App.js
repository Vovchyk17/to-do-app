import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-[100vh] bg-neutral-50">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
