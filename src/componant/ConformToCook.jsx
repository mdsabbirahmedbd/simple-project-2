import PropTypes from 'prop-types';

const ConformToCook = ({conform}) => {
    const {recipe_name,calories,preparing_time} = conform
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table fira text-[#282828B3]">
    <tbody>
      {/* row 1 */}
      <tr className='bg-[#28282808] lg:text-xl text-xs'>
        <th></th>
        <td>{recipe_name}</td>
        <td>{calories}</td>
        <td>{preparing_time}</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}
ConformToCook.propTypes = {
    conform:PropTypes.object
}

export default ConformToCook
