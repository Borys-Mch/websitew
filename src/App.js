import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Slider } from './components/Slider';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Slider />
      <Gallery />
    </div>
  );
}

export default App;
