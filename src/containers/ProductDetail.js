import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProducts,
  removeSelectedProduct,
} from "../redux/products/selectedProductSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;

  const dispatch = useDispatch();
  console.log(productId);

  useEffect(() => {
    const fetchProductDetail = async (productId) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(selectedProducts(response.data));
    };

    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  return (
    <div className="ui container product-page">
      {Object.keys(product).length === 0 ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <div className="ui grid stackable">
          {/* Product Image */}
          <div className="six wide column">
            <div className="product-image-box">
              <img src={image} alt={title} />
            </div>
          </div>

          {/* Product Details */}
          <div className="ten wide column product-details">
            <h1 className="product-title">{title}</h1>

            <div className="price-tag">${price}</div>

            <div className="category-tag">{category}</div>

            <p className="product-description">{description}</p>

            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
