import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login';
import SignUp from './components/signup';
import FoodieHome from './components/homePortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home/*' element={<FoodieHome/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;
