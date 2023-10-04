// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from "react-router-dom"


import { CartContextProvider } from './Context/CartContext';


import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './componentes/CartContainer/CartContainer';

function App() {

  const gretting = "Bienvenidos a El Gaucho"
  const titulo= "Productos"

return (
  
<BrowserRouter> 
      <CartContextProvider>
      <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer gretting= {gretting}/>} />
      <Route path='/category/:cid' element={<ItemListContainer gretting= {gretting, titulo}/>} />
      <Route path='/detalle/:pid' element ={ <ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
    </Routes>
    </CartContextProvider>
</BrowserRouter>
  )
}

export default App