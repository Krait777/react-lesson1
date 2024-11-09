
function App() {
const number = 33

  const text = <h1>Hello {number}</h1>
  return (
    
   <div style={{
      // backgroundColor:"green",

   }}>
    
 
  <Button text="Primary" className="blue-btn"></Button>
  <Button text="Secondary" className="gray-btn"></Button>
  <Button text="Success" className="green-btn"></Button>
  <Button text="Danger" className="red-btn"></Button>
  <Button text="Warning" className="yellow-btn"></Button>
  <Button text="Info" className="aqua-btn"></Button>
  <Button text="Light" className="light-btn"></Button>
  <Button text="Dark" className="dark-btn"></Button>
  <Button text="Link" className="white-btn"></Button>
   </div>
  )
}

export default App

// props

const Button = (props) => {
  return <button className={props.className}> {props.text}</button>
}