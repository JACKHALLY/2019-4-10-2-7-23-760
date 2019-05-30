function calcPrice(inputs) {
  if(inputs["parkTime"] === 0) {
    return 6;
  }
  return 7;
}
module.exports = function main(inputs) {
    // write your code here...
    return calcPrice(inputs);
};
