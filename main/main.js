function calcDistancePrice(inputs) {
  let price;
  if(inputs['distance'] <= 2) {
    price = 6;
  } else {
    price = 10;
  }
  return price;
}

function calcParkingPrice(inputs) {
  const UnitParkingPrice = 0.25;
  return inputs["parkTime"] * UnitParkingPrice;
}

function refinePrice(price) {
  return parseInt(price + 0.5);
}

function calcPrice(inputs) {
  let price = calcDistancePrice(inputs);
  price += calcParkingPrice(inputs);

  return refinePrice(price);
}
module.exports = function main(inputs) {
    // write your code here...
    return calcPrice(inputs);
};
