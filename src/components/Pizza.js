import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
const Pizza = (props) => {
  const { id, pizzaName, price, pizzaImage } = props.data;
  const { addToCart, cartItems } = useContext(PizzaContext);

  const cartItemAmount = cartItems[id];
  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart');
} 

  return (
    <>

        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-2">
            {/* <div class="card" style={{width: '20em'}}> */}
            <div class="card w-90 h-100 border border-warning rounded border-3">
            <img src={pizzaImage} className="card-img-top image-fluid" alt="..." />
          <div className="card-body">
            <h3 style={{color:"darkblue"}} className="card-title">{pizzaName}</h3>
            <h5 style={{color:'orange'}} className="card-text pb-2">Price:₹{price}</h5>
            <button className="btn btn-warning" onClick={() => addToCart(id)} >
              Add To Cart  {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button><br/>
            <button onClick={goToCart} className="btn btn-success m-1"  >
              Go To Cart  
            </button>
            </div>
            </div>
            </div>
      
    </>
  )
}

export default Pizza