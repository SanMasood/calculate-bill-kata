function calculateBill(price, vat, tip){
  
  if (typeof price !== 'number' || typeof vat !== 'number' || typeof tip !== 'number' ){
  return 'error';
  }
  
  return (`£${price + (price * vat / 100) + tip}`);
  
}


//amount + (amount * vat / 100) ) + tip 















module.exports = calculateBill;
