import React, { useContext } from "react";
import { productsContext } from "../Context/productsContext";
import Detail from "../components/Checkout/Detail";
import Emptylist from "../components/Checkout/Emptylist";

const Checkout = () => {
  const { listCheckouts } = useContext(productsContext);
  return <div>{listCheckouts ? <Detail /> : <Emptylist />}</div>;
};

export default Checkout;
