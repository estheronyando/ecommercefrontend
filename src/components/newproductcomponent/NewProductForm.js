import React from "react";
import PropTypes from "prop-types";
import "./newproductform.css";

// import { v4 } from "uuid"; //new code

function NewProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      product:{

      productname: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      productimage: event.target.producturl.value,
    //   id: v4(),
    },
    user:{
        username:"Esther"
    }
  });
  }
  return (
    <React.Fragment>
      <div className="container product-form">
        <form
          className="new-product-form"
          onSubmit={handleNewProductFormSubmission}
        >
          <h1>Product Form</h1>
          <div className="form-input-material">
            <input
              type="text"
              name="name"
              placeholder=" "
              className="form-control-material"
              autoComplete="off"
              id="name"
            />
            <label htmlFor="name"> Name</label>
          </div>
          <div className="form-input-material">
            <input
              type="text"
              name="price"
              placeholder=" "
              className="form-control-material"
              autoComplete="off"
              id="price"
              required
            />
            <label htmlFor="price"> Price</label>
          </div>
          <div className="form-input-material">
            <textarea
              type="text"
              name="description"
              placeholder=" "
              className="form-control-material"
              autoComplete="off"
              id="description"
              required
            />
            <label htmlFor="description"> Description </label>
          </div>
          <div className="form-input-material">
            <input
              type="text"
              name="producturl"
              placeholder=" "
              className="form-control-material"
              autoComplete="off"
              id="producturl"
              required
            />
            <label htmlFor="producturl"> ImageURL</label>
          </div>
          <button type="submit" className="btn btn-primary btn-ghost">
            Add Product
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

NewProductForm.propTypes={
    onNewProductCreation:PropTypes.func
}


export default NewProductForm;