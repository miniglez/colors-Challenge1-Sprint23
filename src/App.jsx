import { useState } from 'react';
import MyForm from './components/MyFormChallenge'
import BoxColor from './components/BoxColor'
import './App.css'

function App() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [value, setValue] = useState("")

  return (
    <>
      <MyForm value={value} setValue={setValue}/>
      <div className='cube'>
        {colors.map((color) => <BoxColor color={color} value={value} />)}
      </div>
    </>
  )
}

export default App
