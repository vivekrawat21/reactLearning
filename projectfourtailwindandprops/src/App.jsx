import Card from "./Card"
function App() {
  let myObj = {
    name:"vivek",
    channel:"chaia nd code",
  }
  return(
  <>
    <h1 className='bg-green-400 rounded-full w-20 mb-8'>
      taiwind test
      
    </h1>
    <Card  {...myObj} />
    </>
  )
}

export default App
