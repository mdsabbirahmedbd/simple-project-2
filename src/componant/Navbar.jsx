import '../index.css'
import user from '../assets/images/Frame 5.png'
const Navbar = () => {
  return (
    <div>
         <div className="navbar lexed">
  <div className="flex-1">
    <a className=" lg:text-4xl text-2xl font-bold text-[#150B2B]">Recipe Calories</a>
  </div>
  <div className='lg:flex-1 lg:block  hidden text-[#150B2BB3] text-xl'>
 <div className='flex items-center list-none gap-5'>
   <li>Home</li>
    <li>Recipes</li>
    <li>About</li>
    <li>Search</li>
 </div>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input bg-[#150B2B0D]   rounded-full input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown  dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] lg:hidden p-2 text-[#150B2BB3] shadow menu  menu-sm dropdown-content rounded-box w-52">
        <li>
          <a className="justify-between">Home</a>
        </li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
  </div>
</div>


    </div>
  )
}

export default Navbar
