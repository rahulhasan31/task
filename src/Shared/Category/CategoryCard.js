import React from 'react';

const CategoryCard = ({product}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={product.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {product.title}
    </h2>

    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;