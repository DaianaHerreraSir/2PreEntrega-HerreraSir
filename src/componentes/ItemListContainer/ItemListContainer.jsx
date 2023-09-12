
import { useEffect, useState } from 'react'
import { mFetch } from '../../data/MockFetch'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'



function ItemListContainer({gretting}){

const [products, setProducts]= useState([])
const [wait, setWaiting]= useState(true)
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

  

return ( <div className='inicio' >
            <h1 className="gretting">
                {gretting}
            </h1>
            
            <div className="row">
              { wait ?
              <h2>Cargando</h2> :
            
              <ItemList products= {products}/>
            
            }
            </div>
        </div>
  )
          }


export default ItemListContainer

