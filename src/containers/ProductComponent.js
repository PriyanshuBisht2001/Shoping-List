import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`} className="product-link">
          <div className="product-card">

            <div className="product-image">
              <img src={image} alt={title} />
            </div>

            <div className="product-content">
              <h4 className="product-title">{title}</h4>
              <p className="product-category">{category}</p>
              <p className="product-price">${price}</p>
            </div>

          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
export default ProductComponent;