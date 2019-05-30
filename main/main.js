function calcParkingPrice(inputs) {
  const UnitParkingPrice = 0.25;
  return inputs["parkTime"] * UnitParkingPrice;
}

function calcPrice(inputs) {
  let price = 6;
  price += calcParkingPrice(inputs);

  return parseInt(price + 0.5);
}
module.exports = function main(inputs) {
    // write your code here...
    return calcPrice(inputs);
};
