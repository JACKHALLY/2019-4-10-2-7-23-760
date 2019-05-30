function calcParkingPrice(inputs) {
  return inputs["parkTime"] * 0.25;
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
