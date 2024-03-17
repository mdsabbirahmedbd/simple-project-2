
import PropTypes from 'prop-types'

const Cooking = ({cook,handelPreparing}) => {
    const {recipe_name,preparing_time,calories} = cook

   return (
    <div>
           <div>
  <table className="table fira text-[#282828B3]">
    <tbody>
      {/* row 1 */}
      <tr className='bg-[#28282808] lg:text-xl text-xs'>
        <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button onClick={()=>handelPreparing(cook)} className='lg:py-3 lg:px-5 text-xs lg:text-lg p-[4px] text-black font-semibold bg-[#0BE58A] rounded-full'>Preparing</button></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}
Cooking.propTypes = {
    cook:PropTypes.array,
    handelPreparing:PropTypes.func
}

export default Cooking
