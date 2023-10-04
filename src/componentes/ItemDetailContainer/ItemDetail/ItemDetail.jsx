
import { useState } from "react";
import { CartContext, useCartContext } from "../../../Context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";




import { Link } from "react-router-dom";
import "./ItemDetail.css" 
const ItemDetail = ({product}) => {

    const [isCounter, setIsCounter]= useState (true)
    const {addProduct}= useCartContext(CartContext)
    const onAdd= (count)=>{
        
    addProduct({...product, quantity: count})
    setIsCounter(false)
    }

return (
    <div className="det">
        
        <h1>Detalle del Producto</h1>

        <div className='row'>
            <div className='col'>
                <img  className= "img" src={product.img} alt="img" />
                <p className="texto"> {product.name}</p>
                <p className="texto"> {product.description}</p>
                <p className="texto">Precio:$ {product.price}</p>
        <div className="col">
        {isCounter ? 
        <ItemCount inicial={1} stock={100} onAdd={onAdd}/>
        : 
        <>
        <Link to ={ '/cart '}>
            <button className="detalle">Ir al Carrito</button>
        </Link>
        <Link to={ '/ '}>
            <button className="detalle">Seguir comprando</button>
        </Link>
        </>
        }
        </div>
        
            </div>
        </div>
    </div>
        )
}

export default ItemDetail