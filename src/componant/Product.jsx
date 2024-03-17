import { IoMdTime } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";
import '../index.css'
import PropTypes from 'prop-types';

const Product = ({card,handelCoking}) => {
    const {recipe_img,recipe_name,short_description,ingredients,preparing_time,calories} = card
  return (
    <div>
    <div className=" bg-white  p-2 lg:h-[700px] rounded-2xl border">
  <figure><img className=" lg:h-64  h-48 bg-cover bg-center w-full rounded-2xl " src={recipe_img} alt="Shoes" /></figure>
  <div className=" p-5 space-y-3">
    <h2 className="lg:text-4xl text-2xl  lexed text-black">{recipe_name}</h2>
    <p className='fira text-[#878787] '>{short_description}</p>
    <hr />
    <div>
        <h1 className='text-xl text-black lexed'>ingredients:{ingredients.length}</h1>
       <ul>
       {
        ingredients.map((ingre,idx) => <li className='fira' key={idx}>{ingre}</li>)
       }
       
       </ul>
    </div>
    <hr />
    <div className='flex gap-5 fira'>
     <span className='flex items-center gap-2'><IoMdTime /> {preparing_time} minutes</span>
     <span className='flex items-center gap-2'><FaGripfire /> {calories} calories</span>
    </div>
    <div className="">
    <button onClick={()=>handelCoking(card)} className='lg:py-3 lg:px-5 py-2 px-3 text-black font-semibold bg-[#0BE58A] rounded-full'>Want to Cook</button>
    </div>
  </div>
</div>

    </div>
  )
}
Product.propTypes = {
    card:PropTypes.object,
    handelCoking:PropTypes.func
}

export default Product
