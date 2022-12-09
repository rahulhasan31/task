import React from 'react';

const MostCard = ({product}) => {
    return (
        <div>
        <div className="card rounded-xl shadow-sm p-1">
<figure><img src={product.img} alt="Shoes" /></figure>
<div className="card-body">
<div className="avatar placeholder">
  <div className="bg-green-600 text-neutral-content rounded-full w-8">
    <span className="text-xs">10%</span>
  </div>
</div>
<h2 className="card-title">
 {product.title}
</h2>
<p>{product.price}$</p>

<div className="card-actions justify-end">

</div>

</div>
<button className='bg-orange-400 text-white font-bold text-4xl rounded-sm' >+</button>
</div>
    </div>
    );
};

export default MostCard;