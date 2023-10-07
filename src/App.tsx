import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import ContactPage from './pages/ContactPage';
import { Mid } from './features/mid';
import { ShoppingPage } from './features/shopping_cart';
import Beginner from './features/beg/Beginner';
import Timer from './features/timer/Timer';
import Preview from './features/contact/components/Preview';
import Todo from './features/todo/Todo';
import Poke from './features/poke/Poke';


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <React.Fragment>
        <Routes>
          <Route path='/' /> 
          <Route path='/beginner' element={<Beginner />} /> 
          <Route path='/timer' element={<Timer />} /> 
          <Route path='/movie' element={<MoviePage />} /> 
          <Route path='/contact' element={<Preview />} /> 
          <Route path='/mid' element={<Mid />} /> 
          <Route path='/cart' element={<ShoppingPage />} /> 
          <Route path='/todo' element={<Todo />} /> 
          <Route path='/poke' element={<Poke />} /> 
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
