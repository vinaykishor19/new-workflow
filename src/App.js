import Workflows from './components/Workflows';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Flow from './components/Flow/Flow';


function App() {
  const [name, setName] = useState('');

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Workflows callback={setName}/>}></Route>
      <Route path="/workflow" element={<Flow data={name}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
