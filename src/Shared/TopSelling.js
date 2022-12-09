import React, { useEffect, useState } from 'react';
import TopSellingCard from './TopSellingCard';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const TopSelling = () => {
    const [Products, setProducts]=useState([])

    useEffect(()=>{
     fetch('products.json')
     .then(res=>res.json())
     .then(data=>setProducts(data))

    },[])
    return (
       <div className=''> 
   <div className='flex justify-between'>
   <h1 className='ml-6 text-2xl mt-3 text-black font-bold'>Top Selling</h1>
       <h1><ChevronRightIcon className=" w-8 h-20 text-2xl font-bold text-orange-600 "></ChevronRightIcon></h1>
   </div>
         <div className='p-3 rounded-3xl grid grid-cols-3 xl:grid-cols-3 gap-5  '>
         
            {
                Products?.map(product=> <TopSellingCard 
                key={product._id}
                product={product}
                ></TopSellingCard>)
            }
        </div>
       </div>
    );
};

export default TopSelling;