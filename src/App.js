import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import { PizzaContextProvider } from './context/PizzaContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <PizzaContextProvider>
        <Router>
          <Navbar/>
          <Home></Home>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </Router>
      </PizzaContextProvider>
      
    </div>
  );
}

export default App;
