import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import ContactPage from './pages/ContactPage';
import { Mid } from './features/mid';


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <React.Fragment>
        <Routes>
          <Route path='/' /> 
          <Route path='/movie' element={<MoviePage />} /> 
          <Route path='/contact' element={<ContactPage />} /> 
          <Route path='/mid' element={<Mid />} /> 
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
