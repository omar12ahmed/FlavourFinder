
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Drinks from './pages/Drinks';
import Recipe from './pages/Recipe';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import UserPage from './pages/UserPage';
import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
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
              <Route path="/UserPage" element={<ProtectedRoute component={UserPage} />} />
          </Routes>
          <LoginButton />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
