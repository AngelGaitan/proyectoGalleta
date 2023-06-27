
import './App.css'
import { useState } from 'react'
import Frases from './assets/components/Frases'
import Citas from './assets/components/Citas'
import sentence from './assets/data/sentence.json'
function App() {
  const bgFondos = ["public/fondos/fondo1.jpg","public/fondos/fondo2.jpg", "public/fondos/fondo3.jpg", "public/fondos/fondo4.jpg","public/fondos/fondo1.jpg","public/fondos/fondo2.jpg", "public/fondos/fondo3.jpg", "public/fondos/fondo4.jpg","public/fondos/fondo1.jpg","public/fondos/fondo2.jpg", "public/fondos/fondo3.jpg", "public/fondos/fondo4.jpg","public/fondos/fondo1.jpg","public/fondos/fondo2.jpg", "public/fondos/fondo3.jpg", "public/fondos/fondo4.jpg",
]
  const [ index, setIndex] = useState(0)

   const luck = () => {
     setIndex(Math.floor(Math.random() * ((sentence.length -1) - 0 + 1)) + 0)
  }
  document.body.style = `background: url(${bgFondos[index]}) no-repeat center center fixed; 
  background-size: cover;
  display: flex; justify-content: center;`

  return (
    <>
      <div className='caja'>
    <Frases data={sentence[index]}/>
    <Citas cita={sentence[index]}/>
    <button onClick={luck}
    >probar mi frase</button>
  
  </div>
    </>
  )
}

export default App
