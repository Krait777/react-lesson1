
function App() {
const number = 33

  const text = <h1>Hello {number}</h1>
  return (
    
   <div style={{
    // backgroundColor:"green",
   }}>
  {text } WORLD
  <Button text="OK" className="green-btn"></Button>
  <Button text="Send" className="black-btn"></Button>
  <Button text="DELETE" className="red-btn"></Button>
   </div>
  )
}

export default App

// props

const Button = (props) => {
  return <button className={props.className}> {props.text}</button>
}