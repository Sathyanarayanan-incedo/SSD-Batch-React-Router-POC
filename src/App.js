import logo from './logo.svg';
import './App.css';
import Intropage from './Components/Intropage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Profile from './Components/Profile';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Intropage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
