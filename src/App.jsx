import  Home  from './pages/Home'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AppBar from './component/AppBar';
import Tour from "./pages/Tour"


function App() {
  

  return (
    <>
    <AppBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/:id' element ={<Tour/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
