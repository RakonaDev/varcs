import Scrollbar from 'smooth-scrollbar';
import './App.css'
import Routing from './router/Routing'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      Scrollbar.init(document.getElementById('root') || document.body, {
        continuousScrolling: true,
        alwaysShowTracks: true,
      })
    })
  })
  return (
    <div className='relative'>
      <Routing />
    </div>
  )
}

export default App
