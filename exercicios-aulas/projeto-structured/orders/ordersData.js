//  Order = {
// id: number
// items: {
//  productId: string
//  quantity: number
//  price: number
// }[]
// status: string
// createdAt: Date
// }

let ordersList = [
  {
    id: 1,
    items: [
      {
        productId: 1,
        quantity: 5,
        price: 25,
      },
    ],
    status: "completed",
    createdAt: new Date(),
  },
  {
    id: 2,
    items: [
      {
        productId: 2,
        quantity: 2,
        price: 5,
      },
    ],
    status: "submitted",
    createdAt: new Date(),
  },
];

// Obter todas as orders
const getOrders = () => {
  return ordersList;
};

// Adicionar uma nova order
const createOrder = (newOrder) => {
  const orderId = ordersList.length + 1;
  const newOrderWithId = {
    id: orderId,
    ...newOrder,
  };
  ordersList.push(newOrderWithId);
  return ordersList;
};

export default {
  getOrders,
  createOrder,
};
