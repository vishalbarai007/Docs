import React from 'react';
// import './App.css';
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  return (
    <div className='background relative w-full h-screen bg-zinc-800 text-white '>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App;