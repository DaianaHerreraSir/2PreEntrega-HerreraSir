
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../../data/MockFetch'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = () => {


const [product, setProduct]= useState({})
const {pid}= useParams()


useEffect(()=>{

mFetch(Number(pid))
.then(Response=>setProduct(Response))
.catch(err=> console.log(err))
}, [])
  
return (
    <div>
        <ItemDetail product= {product}/>
    </div>
  )
}

export default ItemDetailContainer

