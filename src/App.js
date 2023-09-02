import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Family from './Components/Family'
import House from './Components/House'
import Form from './Components/Form'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    
    <>
 <BrowserRouter>
  <House></House>
  <Routes>
    <Route path='/family' element={<Family></Family>}/>
    <Route path='/form' element={<Form></Form>}/>
  </Routes>
  </BrowserRouter>
 
    </>
   
  )
}

export default App