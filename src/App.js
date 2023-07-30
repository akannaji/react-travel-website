import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} exact element={<Home />} />
        <Route path={process.env.PUBLIC_URL + '/services'} exact element={<Services />} />
        <Route path={process.env.PUBLIC_URL + '/products'} exact element={<Products />} />
        <Route path={process.env.PUBLIC_URL + '/sign-up'} exact element={<SignUp />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
