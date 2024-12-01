import { useState } from 'react';
import './App.css'
import Calendar from './Calendar2'

function App() {
  const [value,setValue] = useState(new Date('2024-12-1'))
  return (
    <Calendar value={value} onChange={(date)=> {
      console.log(date.toLocaleDateString());
      setValue(date)
    }}/>
  )
}

export default App
