function calculateBill(price, vat, tip){
  
  return (`£${price + (price * vat / 100) + tip}`);
}


//amount + (amount * vat / 100) ) + tip 















module.exports = calculateBill;
