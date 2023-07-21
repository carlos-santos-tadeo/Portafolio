import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-sen bg-cover bg-slate-300 text-white min-h-screen">
      <Navbar />
      <Header />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
