//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/About Us';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about--us' element={<AboutUs/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
