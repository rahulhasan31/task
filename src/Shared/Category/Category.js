import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Category = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className='flex justify-between'>
   <h1 className='ml-6 text-2xl mt-3 text-black font-bold'>Category</h1>
       <h1><ChevronRightIcon className=" w-8 h-20 text-2xl font-bold text-orange-600 "></ChevronRightIcon></h1>
   </div>
            <div className='p-3 rounded-3xl grid grid-cols-3 xl:grid-cols-3 gap-5 '>
              {
              products?.map(product=><CategoryCard 
              key={product._id}
              product={product}
              ></CategoryCard>)
              }
            </div>
        </div>
    );
};

export default Category;