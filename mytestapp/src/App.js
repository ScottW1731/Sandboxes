import React from 'react';
import './App.css';
import SearchAppBar from './components/navbar';
import { NativeSelect } from '@material-ui/core';
import {SaveButton, DeleteButton} from './components';
import {CustomizedSelects} from './components'

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      
      <CustomizedSelects/>
      
      
    </div>
  );
}

export default App;

