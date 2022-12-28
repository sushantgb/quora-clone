import React from 'react';
import Header from './components/Header';
import BodyContent from './components/BodyContent';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ErrorPage from './components/otherPages/ErrorPage';
import EmptyPage from './components/otherPages/EmptyPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path ='/' element={<BodyContent/> }/>
        <Route exact path ='/following' element={<EmptyPage />}/>
        <Route exact path ='/answers' element={<EmptyPage />}/>
        <Route exact path ='/spaces' element={<EmptyPage />}/>
        <Route exact path ='/notifications' element={<EmptyPage />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
