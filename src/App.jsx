
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Drinks from './components/Pages/Drinks';
import Recipe from './components/Pages/Recipe';
import Footer from './components/Footer';
import "../src/assets/css/food.css";


import './App.css'


function App() {
  return (

    <div>
      <Router>
        <div>
          <Header />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/drinks" element={<Drinks />} />
          </Routes> */}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/UserPage" element={<ProtectedRoute component={Profile} />} />
          </Routes>
          <LoginButton />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
