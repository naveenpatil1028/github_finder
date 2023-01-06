import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';


function App() {
  return (
   <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
    </div>
    <Footer/>
   </Router>
  );
}

export default App;
