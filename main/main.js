function calcPrice(inputs) {
  let price = 6;
  if(inputs["parkTime"] === 0) {
    price += 0;
  } else {
    price += 1;
  }
  return price;
}
module.exports = function main(inputs) {
    // write your code here...
    return calcPrice(inputs);
};
