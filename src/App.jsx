// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import NavBar from './assets/componentes/NavBar/NavBar'
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
  
    <div>
    <NavBar/>

    <ItemListContainer gretting= "Bienvenidos a El Gaucho"/>

      
    </div>
  )
}

export default App