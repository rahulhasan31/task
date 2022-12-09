import React, { useEffect, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import MostCard from './MostCard';


const MostRecent = () => {
    const [Products, setProducts]=useState([])

    useEffect(()=>{
     fetch('mostProducts.json')
     .then(res=>res.json())
     .then(data=>setProducts(data))

    },[])
    return (
        <div className=''> 
   <div className='flex justify-between'>
   <h1 className='ml-6 text-2xl mt-3 text-black font-bold'>Most Recent</h1>
       <h1><ChevronRightIcon className=" w-8 h-20 text-2xl font-bold text-orange-600 "></ChevronRightIcon></h1>
   </div>
         <div className='p-3 rounded-3xl grid grid-cols-3 xl:grid-cols-3 gap-5  '>
         
            {
                Products?.map(product=> <MostCard 
                key={product._id}
                product={product}
                ></MostCard>)
            }
        </div>
       </div>
    );
};

export default MostRecent;