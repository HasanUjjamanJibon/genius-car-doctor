import React from "react";
import SectionHeader from "../../../comopnents/SectionHeader";
import ProductsCard from "../../../comopnents/ProductsCard";

const ProductsSection = () => {
  return (
    <div className="space-y-5">
      <SectionHeader
        title="Popular Products"
        subtitle="Browse Our Products"
        description="the majority have suffered alteration in some form, by injected humour,
    or randomised words which don't look even slightly believable."
      ></SectionHeader>
      <div className="grid-container-3-2-1 gap-6">
        <ProductsCard></ProductsCard>
        <ProductsCard></ProductsCard>
        <ProductsCard></ProductsCard>
        <ProductsCard></ProductsCard>
        <ProductsCard></ProductsCard>
        <ProductsCard></ProductsCard>
      </div>
      <div></div>
      <div className="text-center">
        <button className="btn btn-error capitalize">More Products</button>
      </div>
    </div>
  );
};

export default ProductsSection;
