import ordersData from "./ordersData.js";

const getOrders = () => {
  const orders = ordersData.getOrders();
  return orders;
};

const createOrder = (newOrder) => {
  const updatedOrders = ordersData.createOrder(newOrder);
  return updatedOrders;
};

export default {
  getOrders,
  createOrder,
};
