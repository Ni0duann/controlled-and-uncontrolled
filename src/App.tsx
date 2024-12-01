import './App.css'
import Calendar from './Calendar1'

function App() {

  return (
    <Calendar defaultValue={new Date('2024-12-6')} onChange={(date)=> {console.log(date.toLocaleDateString());
    }}/>
  )
}

export default App
