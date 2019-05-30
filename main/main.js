function calcParkingPrice(inputs) {
  if(inputs["parkTime"] === 0) {
    return 0;
  } else if(inputs["parkTime"] === 6) {
    return 2;
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
