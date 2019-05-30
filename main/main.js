function calcParkingPrice(inputs) {
  if(inputs["parkTime"] === 0) {
    return 0;
  } else {
    return 1;
  }
}

function calcPrice(inputs) {
  let price = 6;
  price += calcParkingPrice(inputs);

  return price;
}
module.exports = function main(inputs) {
    // write your code here...
    return calcPrice(inputs);
};
