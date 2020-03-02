import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Container } from '@material-ui/core/'

import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import NewsList from "./Components/NewsList/NewsList";

function App() {
  return (
      <div className="main_app">
          <Header/>
          <Content>
              <NewsList></NewsList>
          </Content>
      </div>
  );
}

export default App;
