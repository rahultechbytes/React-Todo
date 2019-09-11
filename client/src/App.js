import React, { Component } from 'react';
import './App.css';
import TodoManager from './container/TodoManager/TodoManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoManager />
      </div>
    );
  }
}

export default App;
