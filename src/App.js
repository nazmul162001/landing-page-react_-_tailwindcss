import './App.css';
import AboutInfo from './components/AboutInfo/AboutInfo';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutInfo />
    </div>
  );
}

export default App;
