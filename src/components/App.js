// Padrões do React 
  //Caso naou utilize o Router eliminar esse import
import React from 'react';
import {Routes, Route} from 'react-router-dom'

// Componentes que temos
import NavBarSimple from './NavBarSimple';
import Ex1 from './ex1';
import Ex2 from './ex2';
import Ex3 from './ex3';
import Ex4 from './ex4';
import Ex5 from './ex5';
import Ex6 from './ex6';


function App() {
  //Caso usemos Routers manter true, em SPA, manter False
  const domRouter = true;

  return (
    <div>
      <NavBarSimple siteName="Ex. Mentoria 17-08-2024" domRouter/>
      <Routes>
      <Route path='/' element={
          <h1>Esse é o Home</h1>
        } />
        <Route path='/ex1' element={
          <Ex1 />
        } />
        <Route path='/ex2' element={
          <Ex2 />
        } />
        <Route path='/ex3' element={
          <Ex3 />
        } />
        <Route path='/ex4' element={
          <Ex4 />
        } />
        <Route path='/ex5' element={
          <Ex5 />
        } />
        <Route path='/ex6' element={
          <Ex6 />
        } />
      </Routes>
    </div>
  );
}

export default App;
