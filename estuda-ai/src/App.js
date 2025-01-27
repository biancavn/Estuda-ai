
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Menu from './componentes/menu';
import Portugues from './paginas/portugues1';
import Footer from './componentes/Footer';
import Porques from './paginas/porques';
import ForumPorques from './paginas/forumPorques';
import Interpretacao from './paginas/interpretacao';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portugues" element={<Portugues />}/> 
          <Route path="/Porques" element={<Porques />}/> 
          <Route path="/ForumPorques" element={<ForumPorques />}/> 
          <Route path='/InterpretaçãoDeTexto' element={<Interpretacao/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
