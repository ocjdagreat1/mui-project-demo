import  Home  from './pages/Home'
import './App.css'
import {Routes,Route} from "react-router-dom"

import Tour from "./pages/Tour"


function App() {
  

  return (
    <>
  
    
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Tour' element ={<Tour/>}/>
    </Routes>
  
  
    
    </>
  )
}

export default App
