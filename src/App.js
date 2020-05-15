import React from 'react';
import MainPage from './components/MainPage'
import './App.css';
import { DndProvider} from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={Backend}>
      <div className="App">
        <MainPage />
      </div>
    </DndProvider>
  );
}

export default App;
