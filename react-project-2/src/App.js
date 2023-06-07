import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import Interests from './components/Interests/Interests';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
