import React from "react";
import BannerHeader from "../../comopnents/BannerHeader";
import OrderList from "../../comopnents/OrderList";
import ManageOrderList from "../../comopnents/ManageOrderList";

const ManageOrders = () => {
  return (
    <div>
      <BannerHeader
        details="Manage All Orders"
        pathname="Manage All Orders"
      ></BannerHeader>
      <div className="my-20 overflow-x-auto space-y-3 divide-y-2">
        <ManageOrderList></ManageOrderList>
        <ManageOrderList></ManageOrderList>
        <ManageOrderList></ManageOrderList>
        <ManageOrderList></ManageOrderList>
      </div>
    </div>
  );
};

export default ManageOrders;
