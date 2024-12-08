async function foo() {
  return Promise.reject("Hello world");
}

(async function () {
  try {
    const result = await foo();
  } catch (error) {
    console.log(error);
  }
})();
