import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
Link;

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { CardTransc } from "../components/Card";

import { OrdersTypes } from "../utils/Type";

function DetailTransc() {
  const [orders, setOrders] = useState<OrdersTypes[]>([]);

  useEffect(() => {
    fetchDataOrders();
  }, []);

  function fetchDataOrders() {
    axios
      .get("https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/orders")
      .then((res) => {
        setOrders(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <header className="bg-white border-b-8 border-secondary p-5">
        <h1 className="text-4xl">Transactions</h1>
      </header>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex flex-col items-center w-full p-8">
          <>
            <div className="flex justify-center items-center h-10 gap-10 bg-white rounded-2xl w-full max-w-sm">
              <Link to="/transactions">Buying</Link>
              <p>|</p>
              <Link to="/transactions">Selling</Link>
            </div>
            <CardTransc
              id={1}
              invoice={`XVII/20231/UDSIDJ`}
              status={`On Process`}
              date={`21 Januari 2023`}
            />
            {orders.map((order, index) => {
              <CardTransc
                key={index}
                id={order.order_id}
                invoice={order.invoice}
                status={order.order_status}
                date={order.order_date}
              />;
            })}
          </>
        </div>
      </div>
    </Layout>
  );
}

export default DetailTransc;
