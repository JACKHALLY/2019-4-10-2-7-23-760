function calcParkingPrice(inputs) {
  return inputs["parkTime"] * 0.25;
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
