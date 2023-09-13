import {PIZZAS} from '../pizzas';
import Pizza from './Pizza';

const Shop = () => {
    return (
        <>
        {/* <div className='container-fluid pt-4'>
        <div class="row pt-4"> */}
        <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">

            {
                PIZZAS.map((pizza) => (
                    <Pizza data={pizza} />
                ))
            }
        
        </div>
        </div>
</div>
        </>
    )
}

export default Shop