import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Discography from './views/Discography';
import Services from './views/Services';
import Studio from './views/Studio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Discography" element={<Discography />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Studio" element={<Studio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
