import { useCart } from "../../Providers/Cart"


const CartPage = () =>{

	const {cart} =  useCart()

	console.log(cart)

	return(
		<>
		<div>
			<h1>sla mermao</h1>
		</div>
		</>
	)
}

export default CartPage