import { useState } from "react"

export function App(){

const [numero, setNumero] = useState(100)

function handleAumentar() {
  setNumero(numero + 100)
}

  return (
<section>
  <h1>App</h1>

  <div>
    <h2>
      numero:{numero}
    </h2>
    <button onClick={handleAumentar}>Duplicar</button>
  </div>
</section>
  )
}