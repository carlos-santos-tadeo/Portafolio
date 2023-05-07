import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Project from './components/Project'

function App() {


  return (
    <div className="App font-sen bg-cover bg-slate-300 text-white min-h-screen">
      <Navbar />
      <Header />
      <Experience/>
      <Project/>
    </div>
  )
}

export default App
