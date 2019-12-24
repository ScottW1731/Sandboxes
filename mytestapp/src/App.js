import React from 'react';
import './App.css';
import SearchAppBar from './components/navbar';
import { NativeSelect } from '@material-ui/core';
import {SaveButton, DeleteButton} from './components'
 

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <h1><NativeSelect/></h1>
      
      
    </div>
  );
}

export default App;

