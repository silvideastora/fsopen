const Hello = (props) => {
  console.log(props);
  return(
    <div>
      <p>Hola {props.name} tu tienes {props.age} años de edad</p>
    </div>
  )
}


const App = () => {
  const name = "Minato"
  const age = 14
  return (
    <div>
      <h1>SALUDOS</h1>
      <Hello name={name} age={age} raza=""/>
    </div>

)
}

export default App
