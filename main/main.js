const PenaltyDistance = 8;
const UnitDistPrice = 0.8;

function calcPenaltyDistancePrice(distance) {
  const Penalty = 1.5;

  let penalty = 0;
  if(distance > PenaltyDistance) {
    penalty = (distance - PenaltyDistance) * UnitDistPrice * Penalty;
  }
  return penalty;
}

function calcDistancePrice(distance) {
  const BaseDistance = 2;
  const BasePrice = 6;

  let price = BasePrice;
  price += calcPenaltyDistancePrice(distance);
  if(distance > PenaltyDistance) {
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
