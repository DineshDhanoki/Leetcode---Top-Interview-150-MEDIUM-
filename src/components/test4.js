function outer() {
  function inner() {
    console.log(x);
  }
  const x = 5;
  return inner;
}
const inner = outer();
inner();
