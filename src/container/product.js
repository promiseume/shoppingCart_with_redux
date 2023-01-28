// import React, { useEffect, useCallback, useMemo } from "react";
// import axios from "axios";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setProducts } from "../redux/actions";
// import {Link} from 'react-router-dom'
// const ProductPage = () => {
// //  const products = useSelector((state) => state.allProducts.products);
// //   const dispatch = useDispatch();
//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//   //   dispatch(setProducts(response.data));
//   // };
//     }

//   useEffect(() => {
//     fetchProducts();
//   }, []);
// //   const products = useSelector((state) => state.allProducts.products);
//   const renderList = products.map((product) => {
//     const { id, title, image, price, category } = product;
//     return (
//       <div className="four wide column" key={id}>
//           <div className="ui link cards">
//             <div className="card">
//               <div className="image">
//                 <img src={image} alt={title} />
//               </div>
//               <div className="content">
//                 <div className="header">{title}</div>
//                 <div className="meta price">$ {price}</div>
//                 <div className="meta">{category}</div>
//               </div>
//             </div>
//           </div>
//       </div>
//     );
//   });
//   return <>{renderList}</>;
// };

// export default ProductPage;