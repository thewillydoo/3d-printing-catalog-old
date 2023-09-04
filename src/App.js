import './App.css';
import Productsblock from './components/Productsblock'; 
import Upload from './components/Upload';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <a href="/" target="_self">
        <img className='logo' src='./productimages/logo.png' />
      </a>
      <Home/>
      <Navbar/>
      <Productsblock/>
      
    </div>
  );
}

export default App;
