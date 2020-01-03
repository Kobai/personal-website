import React from 'react';
import './App.css';
import Home from './containers/Home'
import Experience from './containers/Experience'
import Project from './containers/Project'

const App: React.FC = () => {
  return (
    <div className="App">
      <Home/>
      <Experience/>
      <Project/>
    </div>
  );
}

export default App;
