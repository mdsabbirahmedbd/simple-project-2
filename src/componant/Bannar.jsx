import bannar from '../assets/images/bannar.png'

const Bannar = () => {
  return (
    <div className='my-10 p-2'>
         <div className=" lg:h-[700px] bg-no-repeat flex justify-center items-center text-center rounded-xl" 
         style={{backgroundImage:`url(${bannar})`,
         width:'full',
         backgroundSize:'cover',
         backgroundPosition:'center'
         }}>
            <div className='lg:space-y-10 space-y-5 p-7'>
            <h1 className='lg:text-6xl text-lg text-white font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className='lg:text-xl text-xs font-medium'>Our dedicated team of hospitality professionals is committed to ensuring your dining experience surpasses all <br /> expectations.  From the moment you step through our doors, expect to be greeted with warmth and hospitality as we strive to make your visit truly memorable.</p>
            <div className='space-x-5'>
            <button className='lg:py-3 lg:px-5 py-2 px-3 lg:text-xl text-xs font-semibold bg-[#0BE58A] text-black  rounded-full'>Explore Now</button>
            <button className='lg:py-3 lg:px-5 py-2 px-3 lg:text-xl text-xs  border  font-semibold text-white rounded-full'>Our Feedback</button>
            </div>
            </div>
        </div> 
    </div>
  )
}
export default Bannar
