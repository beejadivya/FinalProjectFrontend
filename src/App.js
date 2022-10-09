
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Registration from './Registration';
import Cart from './pages/Cart';
import Checkout from './Checkout';

// import Cart from './pages/Cart';

// import CartList from './CartList';
// import Gallery from './Gallery';
// import Homes from './Homes';
//import Header1 from './Components/Header1';




  
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    
    <Router>
      <Navbar />
      
      
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Registrationt' element={<Registration/>} />
        {/* <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Homes' element={<Homes/>} />
        <Route path='/CartList' element={<CartList/>} />
         */}
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Checkout' element={<Checkout/>} />
        

      </Routes>
    </Router>
    </div>
      <Footer />
    </div>
    
  );
}
  
export default App;
