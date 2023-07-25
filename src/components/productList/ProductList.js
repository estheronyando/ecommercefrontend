import React from 'react';

import Product from '../product/Product';
import './productlist.css'


// import tshirt from '../../images/products/tshirt.png';
// import backpack from '../../images/products/backpack.png';
// import pants from '../../images/products/pants.png';
// import trekkingshoes from '../../images/products/trekkingshoes.png';
// import giacket from '../../images/products/giacket.png';
// import tshirt_ladies from '../../images/products/tshirt_ladies.png';



  

function ProductList(props) {
    const { productList } = props;
    console.log("Product List:"+productList);

     // If productList is undefined or empty, return a message or loading indicator
  if (!productList || productList.length === 0) {
    console.log(productList.length)
    return <div>Loading products...</div>; // You can display any loading message or indicator you prefer
  }

   return (
    <React.Fragment>
    <div className='container' id="products">
        <div className="row pdg-line">

            {/* Product Title */}
            <div className="col-4 col-sm-4 col-md-4">

                        <div className="abt-top-border"> </div> 
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <p className="product-title text-center">PRODUCTS </p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="abt-top-border"> </div> 
            </div>
           
        </div>

        {/* Product List */}
        <div className="men-products">
            <div className="row">
            {props.productList.map((product) =>
                <  Product 
                photo = {product.productimage}
                name = {product.productname}
                price = {product.price}
                description = {product.description}
                key= {product._id}/>

            )}
            </div>

        </div>

    </div>
    </React.Fragment>

   )
}



export default ProductList;