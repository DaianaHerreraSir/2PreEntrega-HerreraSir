import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import "./CartContainer.css"
const CartContainer = ()=>{
    const {cartList, deleteCart, totalPrice, deleteItem} = useCartContext()



    //GENERAR ORDEN DE COMPRA
// const handleAddOrder = ()=>{
// const order={}
// order.buyer={name: "Daiana",phone: "33454545", email:"dherrerasir@gmail.com"}
// order.items= cartList.map(prod=>{
//     return{id:prod.id, name:prod.name,quantity: prod.quantity, price: prod.price,}
// })
// order.total= totalPrice()
// console.log(order);
// const queryDB=getFirestore () IMPORTAR ESTO}
    return(
         cartList.length > 0 ?

        <div className="carritocontainer"> Carrito de compras
        {cartList.map ( prod=> <div className="detallecarrito" key={prod.id}>
            <img  className= "img" src={prod.img} alt="img" />
            <p className="texto"> {prod.name}</p>
            <p className="texto">Cantidades: {prod.quantity}</p>
            <p className="texto">Precio:$ {prod.price}</p>
        
        <button className="detalle" onClick={()=>deleteItem(prod.id)}>X</button>       
            </div>)}
    {totalPrice() !== 0 && <h3 className="preciocarrito">Precio total:$ {totalPrice()} </h3>} 
        <div className="col w-25">
        <button className="detalle" onClick={deleteCart}>Vaciar Carrito</button>
        
        <form >
            <input type="text" 
                    name="Nombre" 
                    placeholder="Ingrese su nombre"  
                   />
            <input type="text" 
                    name="Apellido" 
                    placeholder="Ingrese su apellido" 
                   />
            <input type="number" 
                 name="Telefono" 
                 placeholder="Ingrese su telefono" 
                />
            <input type="email" 
                   name="Email" 
                   placeholder="Ingrese su email" 
                   />
        
        <button className="detalle" 
       >Finalizar Compra
        </button>
    </form>
         </div>
        </div>
        : <div>
        <h2>Carrito Vacio</h2>
        <Link to="/" className="texto">Volver al Inicio</Link>
        </div>
   
) }
//ONSUBMIT EN FOR DE HANDLEADDORDER
export default CartContainer