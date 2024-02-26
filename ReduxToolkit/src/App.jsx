
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import "./App.css"
function App() {
  return (
  <>
  
  {/* redux is a library and react- redux is bridger b/w redux and react to need redux in react we need react-redux  */}
  <h1>Learn about redux toolkit</h1>
    <AddTodo />
    <Todos />
  
 
  </>
  )
}
export default App
