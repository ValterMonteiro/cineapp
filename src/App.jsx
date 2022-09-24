import { Button } from "./components/Button"

function App() {
  let nome = "APP"
  
  return (
    <div className="App">
      <h1>Meu {nome}</h1>
      <Button text="Confirmar" variant="danger"/>
      <Button text="Ok" variant="succes"/>
      <Button text="Delete"/>
    </div>
  )
}
export default App
