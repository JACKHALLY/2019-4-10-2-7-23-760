function calcPenaltyDistancePrice(distObj, unitPrice) {
  const Penalty = 1.5;
  const PenaltyDistance = 8;

  let penalty = 0;
  if(distObj.distance > PenaltyDistance) {
    penalty = (distObj.distance - PenaltyDistance) * unitPrice * Penalty;
    distObj.distance = PenaltyDistance;
  }
  return penalty;
}

function calcDistancePrice(distance) {
  const BaseDistance = 2;
  const BasePrice = 6;
  const UnitDistPrice = 0.8;

  let price = BasePrice;
  let distObj = new Object();
  distObj.distance = distance;
  price += calcPenaltyDistancePrice(distObj, UnitDistPrice);
  distance = distObj.distance;

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
  const RoundOff = 0.5;
  return parseInt(price + RoundOff);
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
