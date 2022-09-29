import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Slider />
    </div>
  );
}

export default App;
