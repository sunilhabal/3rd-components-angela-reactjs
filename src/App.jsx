import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Add,Sub,Mul,Div } from './components/caluclator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul className='cal'>
      <li>The Sum of: {Add(4,4)}</li>
      <li>The Sub of: {Sub(6,2)}</li>
      <li>The Mul of: {Mul(6,6)}</li>
      <li>The Div of: {Div(6,2)}</li>
    </ul>
    </>
  )
}

export default App
