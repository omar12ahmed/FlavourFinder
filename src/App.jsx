
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Drinks from './pages/Drinks';
import Recipe from './pages/Recipe';
import Favourites from './pages/Favourites';
import "../src/assets/css/food.css";


import './App.css'


function App() {
  return (

    <div>
      <Router>
        <div>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
