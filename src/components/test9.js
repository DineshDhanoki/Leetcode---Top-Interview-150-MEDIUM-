const foo = function () {
  console.log(this.name);
  const bar = () => {
    console.log(this.name);
  };
  bar();
};
foo.call({ name: "John" });
