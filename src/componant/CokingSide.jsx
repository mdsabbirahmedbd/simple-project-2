import '../index.css'
import ConformToCook from './ConformToCook';
import Cooking from './Cooking'
import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";

const CokingSide = ({cooks,handelPreparing,confarMation}) => {
  const totalTime =  confarMation.reduce((p,c) => p + c.preparing_time ,0)
  const totalCalories =  confarMation.reduce((p,c) => p + c.calories ,0)
  return (
    <div className="border space-y-5 bg-white rounded-xl flex-1 p-5 lexed">
      <div>
        <h1 className="text-2xl text-center text-black">Want to cook: {cooks.length}</h1>
      </div>
      
      <div>
      <div className={`overflow-x-auto`}>
  <table className="table fira text-[#282828B3]">
    {/* head */}
    <thead>
      <tr className='lg:text-xl text-xs'>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
  </table>
</div>
        <div className='space-y-4'>
        {
          cooks.map((cook,idx) => <Cooking key={idx} cook={cook} handelPreparing={handelPreparing}></Cooking>)
        }
  
        </div>
      </div>

{/* Currently cooking: 02 */}
     <div>
        <h1 className="text-2xl text-center text-black">Currently cooking: {confarMation.length} </h1>
      </div>
      <div className="overflow-x-auto">
  <table className="table fira text-[#282828B3]">
    {/* head */}
    <thead>
      <tr className='lg:text-xl text-xs'>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    </table>
    </div>
    {
      confarMation.map((conform,idx) => <ConformToCook key={idx} conform={conform}></ConformToCook>)
    }
      <div className='lg:text-xl text-xs space-y-3 text-black my-5'>
        <h1 className='flex items-center'><IoMdTime /> Total Time = {totalTime} minutes</h1>
        <h1 className='flex items-center'><FaGripfire /> Total Calories = {totalCalories} calories</h1>
        </div>
      <div>
      </div>
    </div>
  )
}
CokingSide.propTypes={
  cooks:PropTypes.array,
  handelPreparing:PropTypes.func,
  cook:PropTypes.object,
  confarMation:PropTypes.array
}


export default CokingSide
