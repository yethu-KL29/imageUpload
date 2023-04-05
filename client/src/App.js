
import DisplayImage from './Components/DisplayImage';
import Home from './Components/Home';
import Auth from './Components/Auth';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/display' element={<DisplayImage/>}/>
        <Route path='/auth' element={<Auth/>}/>

     </Routes>

    </div>
  );
}

export default App;
