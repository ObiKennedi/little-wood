//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/About Us';
import Portfolio from './Pages/Portfolio';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/Contact Us';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about--us' element={<AboutUs/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/contact--us' element={<ContactUs/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
