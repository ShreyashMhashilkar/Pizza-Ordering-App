import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CartItem = (props) => {

    const { id, pizzaName, price, pizzaImage } = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(PizzaContext);
    return (
        <>

            <br />
            <div class="card mb-6 pb-4" style={{ maxWidth: '540px' }}>
                <div class="row">
                    <div class="col-md-4">
                        <img src={pizzaImage} class="img-fluid p-2" style={{height:'100%'}} alt="..." />
                    </div>
                    <div class="col-md-8 justify-content-right">
                        <div className="card-body">
                            <h3 className="card-title" style={{color:"darkblue"}}>{pizzaName}</h3>
                            <h6 style={{color:'orange'}} className="card-text text-center">Price:₹{price}</h6>
                            {/* <div className="mx-auto"> */}
                            <div class="input-group text-center">
                                <span class="input-group-btn" >
                                    <button style={{ backgroundColor: 'red' }} class="btn btn-default" type="button" onClick={() => removeFromCart(id)}>-</button>
                                </span>
                                <input className="text-center" style={{ backgroundColor: '#fff' }} type="text"  value={cartItems[id]}
                                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                                <span class="input-group-btn">
                                    <button style={{ backgroundColor: 'green' }} class="btn btn-default" type="button" onClick={() => addToCart(id)}>+</button>
                                </span>
                            {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default CartItem;