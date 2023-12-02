//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
      <Route path='/' element={<Home/>}/>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
