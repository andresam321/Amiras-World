import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginRegister from "./views/LoginRegister"
import DisplayPictures from "./components/DisplayPictures";
import AddPicture from './components/AddPicture';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<LoginRegister/>}/>
    <Route path="/viewingPictures" element={<DisplayPictures/>}/>
    <Route path="/addPicture" element={<AddPicture/>}/>
    </Routes>
     
    </div>
    </BrowserRouter>  
  );
}

export default App;
