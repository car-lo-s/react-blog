import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import { Pesquisa } from './pesquisa'
import { Resultado } from './resultado'



function App() {
  const [msg, setMSG] = useState<string>("")
  
  const receberDado = (informacao:string)=>{
   setMSG(informacao)
  }

  return (
    <div className="App fundo">
      <Pesquisa mensagem={receberDado}/>
      <Resultado texto={msg} />
      <footer>Carlos R.</footer>
    </div>
  )
}

export default App
