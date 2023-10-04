
import { useEffect, useState } from 'react'
import { mFetch } from '../../data/MockFetch'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const Wait = () =>{
  // useEffect (()=>{
  //   return ()=>{
  //     console.log("Desmontando");
  //   }
  // }

  // )
  return(
    <>
    <h2>Cargando</h2>
    </>
  )
}

function ItemListContainer({gretting}){

const [products, setProducts]= useState([])
const [wait, setWaiting]= useState(true)
const [like, setLike]= useState(false)

const {cid}= useParams()

useEffect(()=>{
  if(cid){

mFetch()

    .then (respuesta => setProducts(respuesta.filter(product => cid === product.category)))
    .catch(err => console.log(err))
    .finally(()=>setWaiting(false))
  }
    else {
mFetch()

    .then (respuesta => setProducts(respuesta))
    .catch(err => console.log(err))
    .finally(()=>setWaiting(false))
    }
},[cid])

const handleLike = () =>{
  setLike(!like)
}  

const handleAddProduct = ()=>{
  setProducts([
    ...products,
    {id: products.length+1, name:"producto", price: 2}
  ])
}

return ( <div className='inicio' >
            <h1 className="gretting">
                {gretting}
            </h1>
            <button className='detalle'onClick={handleLike}>Me gusta</button>
            <button className='detalle' onClick={handleAddProduct}>Agregar producto</button>
            <div className="row">
              { wait ?
              <Wait/>:
            
              <ItemList products= {products}/>
            
            }
            </div>
        </div>
  )
          }


export default ItemListContainer

