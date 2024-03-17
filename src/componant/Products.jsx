import { useEffect, useState } from 'react';
import '../index.css'
import Product from './Product'
import PropTypes from 'prop-types';
const Products = ({handelCoking}) => {
    const [cards,setCard] = useState([])
    useEffect(()=>{
        fetch('/public/products.json')
        .then(response => response.json())
        .then(data => setCard(data))
    },[])
  return (

    <div className=" flex-1">
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        {
            cards.map((card,idx) => <Product key={idx} card={card} handelCoking={handelCoking}> </Product>)
        }
     </div>
    </div>
  )
}

Products.propTypes = {
    handelCoking:PropTypes.func
}
export default Products
