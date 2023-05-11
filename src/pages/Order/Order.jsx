import React from "react";
import BannerHeader from "../../comopnents/BannerHeader";
import OrderList from "../../comopnents/OrderList";

const Order = () => {
  return (
    <div>
      <BannerHeader
        details="Cart Details"
        pathname="Product Details"
      ></BannerHeader>
      <div className="my-20 overflow-x-auto space-y-3 divide-y-2">
        <OrderList></OrderList>
        <OrderList></OrderList>
        <OrderList></OrderList>
        <OrderList></OrderList>
      </div>
    </div>
  );
};

export default Order;
