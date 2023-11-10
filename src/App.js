import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from './components/Show';
import Update from './components/Update';
import Form from './components/Form';

function App() {
  return (
  <div className='continer'>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Form/>}></Route>
      <Route exact path="/show" element={<Show/>}></Route>
      <Route exact path="/update" element={<Update/>}></Route>
    </Routes>  
  </BrowserRouter>
  </div>
    
  )
}

export default App;
