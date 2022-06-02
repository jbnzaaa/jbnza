import './components/styles/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

function App() {
  return (
    <>
      <Router>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>

        {/* <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about' element={<Home/>}></Route>
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
