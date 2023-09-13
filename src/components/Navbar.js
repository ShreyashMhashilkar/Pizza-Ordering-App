import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <>

      <nav class="navbar navbar-expand-lg  navbar-light" style={{ background: 'darkblue' }}>
        <div class="container-fluid">
          <Link to='' className="navbar-brand" ><h3 style={{ color: '#fff' }}>PIZZA ORDERING APP</h3></Link>

          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page"><h3 style={{ color: '#fff' }}>HOME</h3></Link>

            </div>
            <div class="navbar-nav ms-auto">
              <Link to='/cart' className="nav-link">
                <h4 style={{ color: '#fff' }}><AiOutlineShoppingCart />
                  Cart</h4>
              </Link>
            </div>
          </div>
        </div>
      </nav>

     
    </>
  )
}


export default Navbar