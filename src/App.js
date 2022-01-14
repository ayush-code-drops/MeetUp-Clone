import './App.css';
import LayoutPage from './Components/Main Page/LayoutPage';
import Navbar from './Components/Navbar/Navbar';
import HorizontalLinearStepper from './CreateYourGroup/HorizontalLinearStepper';
import Home from './Pages/HomePage';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    {/* <LayoutPage/> */}
    <AllRoutes/>
    </div>
  );
}

export default App;
