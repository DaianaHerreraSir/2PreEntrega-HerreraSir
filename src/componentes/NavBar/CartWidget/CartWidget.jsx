import { useCartContext } from "../../../Context/CartContext"


function CartWidget() {
    const{totalQuantity}= useCartContext()
    return(
        <div>
            {totalQuantity() !== 0 && totalQuantity()}
        🛒
       
        </div>
    )
}

export default CartWidget