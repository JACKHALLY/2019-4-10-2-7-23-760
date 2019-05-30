function calcDistancePrice(distance) {
  const BaseDistance = 2;
  const PenaltyDistance = 8;
  const BasePrice = 6;
  const UnitDistPrice = 0.8;
  const Penalty = 1.25;

  let price = BasePrice;
  if(distance > PenaltyDistance) {
    price += (distance - PenaltyDistance) * UnitDistPrice * Penalty;
    distance = PenaltyDistance;
  }
  
  if(distance > BaseDistance) {
    price += (distance - BaseDistance) * UnitDistPrice;
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
