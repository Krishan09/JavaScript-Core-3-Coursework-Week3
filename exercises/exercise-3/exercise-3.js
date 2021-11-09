let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

//take array of orders
//access each property
//log each property
// log total
//make console log table

//make title
function receipt(QTY, ITEM, TOTAL) {
  this.QTY = QTY;
  this.ITEM = ITEM;
  this.TOTAL = TOTAL;
}

function takeOrder(array) {
  let totalPrice = 0;
  let totalPurchase = array.map(({ itemName, quantity, unitPrice }) => {
    let itemTotal = quantity * unitPrice;
    totalPrice += itemTotal;
    return new receipt(quantity, itemName, itemTotal.toFixed(2))
  });

  console.table(totalPurchase);
  console.log(`Total ${totalPrice}`);
}

takeOrder(order);