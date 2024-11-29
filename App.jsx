import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FileUpload from './components/uploadFile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileUpload />
    </>
  )
}

export default App
