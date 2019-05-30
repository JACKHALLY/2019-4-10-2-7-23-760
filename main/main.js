function calcDistancePrice(distance) {
  let price;
  if(distance <= 2) {
    price = 6;
  } else {
    price = 10;
  }
  return price;
}

function calcParkingPrice(parkingTime) {
  const UnitParkingPrice = 0.25;
  return parkingTime * UnitParkingPrice;
}

function refinePrice(price) {
  return parseInt(price + 0.5);
}

function calcPrice(inputs) {
  let price = calcDistancePrice(inputs["distance"]);
  price += calcParkingPrice(inputs["parkTime"]);

  return refinePrice(price);
}
module.exports = function main(inputs) {
    // write your code here...
    return calcPrice(inputs);
};
