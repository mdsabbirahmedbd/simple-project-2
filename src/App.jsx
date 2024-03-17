
import { useState } from 'react';
import './App.css'
import Bannar from './componant/Bannar';
import CokingSide from './componant/CokingSide';
import Navbar from './componant/Navbar';
import Products from './componant/Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooks,setCoking] = useState([])

  const handelCoking = (coking) => {
  const newCook = [...cooks,coking]
  const exist = cooks.find((current) => current.id == coking.id)
  if(exist){
   toast.warn('already exists')
  }else{
    setCoking(newCook)
    toast.success(`Success To ${coking.recipe_name} `)
  }
}

const [confarMation,setComfarmation] = useState([])

const handelPreparing = (cook)=>{
  const remaining = cooks.filter(c => c.id !== cook.id)
  setCoking(remaining)

  const conformTopreparing = [...confarMation,cook]
  setComfarmation(conformTopreparing)
}


  return (
    <>
      <div className=' container mx-auto '>
              {/* this  is the navBer section  */}
              <Navbar></Navbar>

              {/* this  is the bannar componant */}
               <Bannar></Bannar>

               {/* this is the Products componant */}
               <div className="my-20">
               <div className="text-center space-y-4">
               <h1 className="lg:text-4xl text-2xl font-semibold text-[#150B2B]">Our Recipes</h1>
                <p className='lg:text-xl text-xs '>Indulge in a culinary journey like no other with our meticulously crafted recipes, each infused with passion and creativity. From sizzling appetizers to mouthwatering mains and decadent desserts, our menu promises a symphony of flavors to tantalize your taste buds.</p>
              </div>
               <div className='flex my-10 gap-4 flex-col p-2 lg:flex-row'>
               <Products handelCoking={handelCoking}></Products>
                <CokingSide cooks={cooks} handelPreparing={handelPreparing} confarMation={confarMation}></CokingSide>
               </div>
               </div>
               <ToastContainer/>
      </div>
    </>
  )
}

export default App
