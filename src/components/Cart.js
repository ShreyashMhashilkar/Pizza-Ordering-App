import { useContext } from "react"
import { PIZZAS } from "../pizzas"
import { PizzaContext } from "../context/PizzaContext"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"
import { TfiFaceSad } from 'react-icons/tfi';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(PizzaContext);
    const navigate = useNavigate();
    const totalAmount = getTotalCartAmount()


    return (
        <>
            <div>


                <div class="container">

                    {PIZZAS.map((pizza) => {
                        if (cartItems[pizza.id] != 0) {
                            return <CartItem data={pizza} />;
                        }
                    })}
                </div>
            </div>
            {/* </div> */}
            {totalAmount > 0 ? (
                <div>
                    
                            <h1 className="p-2 m-4" style={{ backgroundColor: 'blue',color:'#fff' }}>Subtotal:${totalAmount}</h1>
                       
                    

                    <button className="btn btn-warning" onClick={() => navigate("/")}>Continue Shopping</button>
                    {/* <button className="btn" style={{ backgroundColor: 'yellow' }}>Checkout</button> */}
                </div>
            ) : (
                <h1 className="p-4" style={{color:'orange'}}><TfiFaceSad/> Your Cart is Empty!</h1>
            )
            }
            {/* </div> */}

            {/* </div> */}
        </>
    )
}

export default Cart