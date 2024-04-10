import {React, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import List from './components/List';
import GptClone from 'components/GptClone';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<List />} />
        <Route exact path='/gpt' element={<GptClone />} />
      </Routes>
    </Router>
  );
};
export default App;
