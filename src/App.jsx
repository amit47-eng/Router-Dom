import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Landing from './component/landing.jsx' 
import Home from './component/Home.jsx'
import About from './component/about.jsx'


function App() {

  return (

    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App;
