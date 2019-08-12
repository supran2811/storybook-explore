import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/taskList';
import  InboxScreen  from './components/inboxScreen';

function App() {
  return (
    <div className="App">
      <InboxScreen />
    </div>
  );
}

export default App;
