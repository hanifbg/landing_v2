import React from "react";
import { useRouter } from "next/router";

const ProductsPage = () => {
  const { query } = useRouter();

  return (
    <div style={{ color: "white" }}>
      <h1>Detail Product</h1>
      <p>Product : {query.id}</p>
    </div>
  );
};

export default ProductsPage;
