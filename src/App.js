import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Form1 } from "./components/registration/Form1"
import { Form2 } from "./components/registration/Form2"
import {Users} from "./components/registration/Users"

function App() {
  return (
    <div className="App">
      
<Routes>
<Route path='registration/one'element={<Form1/>}></Route>
<Route path='registration/two'element={<Form2/>}></Route>
<Route path='users'element={<Users/>}></Route>

  
</Routes>
    
    </div>
  );
}

export default App;
