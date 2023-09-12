import ItemCount from "../../ItemCount/ItemCount";

import "./ItemDetail.css" 

const ItemDetail = ({product}) => {
    const onAdd= (count)=>{
        alert(`${count} productos seleccionados`);
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
        <ItemCount inicial={1} stock={15} onAdd={onAdd}/>
                <button className="detalle">Comprar Ahora</button>
            </div>
        </div>
    </div>
        )
}

export default ItemDetail