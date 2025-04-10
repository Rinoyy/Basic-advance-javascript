const Orders = [
  {
    id: 1,
    name: "Maxwell Wright",
    phone: "(0191) 722 5256",
    items: [
      { type: "Makanan", list: { Rendang: 500, Tahu: 70 } },
      { type: "Minuman", list: { Kopi: 200, Teh: 300 } },
    ],
    total: 0,
  },
  {
    id: 2,
    name: "Raja Villarreal",
    phone: "(0191) 722 5256",
    items: [
      { type: "Makanan", list: { Rendang: 500, Tahu: 70 } },
      { type: "Minuman", list: { Kopi: 200, Teh: 300 } },
    ],
    total: 0,
  },
  {
    id: 3,
    name: "Helen Richards",
    phone: "(0191) 722 5256",
    items: [
      { type: "Makanan", list: { Rendang: 500, Tahu: 70 } },
      { type: "Minuman", list: { Kopi: 200, Teh: 300 } },
    ],
    total: 0,
  },
  {
    id: 4,
    name: "Georgina Gallagher",
    phone: "(0191) 722 5256",
    items: [
      { type: "Makanan", list: { Rendang: 500, Tahu: 70 } },
      { type: "Minuman", list: { Kopi: 200, Teh: 300 } },
    ],
    total: 0,
  },
];

// Filter object when total more than 200
const findTotalsMoreThan200 = Orders.filter((order) => order.total > 200);

// Make a discount 10%
const discount = Orders.map((order) => order.total * 0.1);

//  Replace total with a new discount
// Orders.forEach((order, index) => {
//   order.total = order.total - discount[index];
// });

Orders.forEach((order) => {
  let total = 0;

  order.items.forEach((item) => {
    const subTotal = Object.values(item.list).reduce((sum, price) => sum + price);
    total += subTotal;
  });

  order.total = total;
});

console.log(Orders);

// console.log(JSON.stringify(Orders, null, 2));
