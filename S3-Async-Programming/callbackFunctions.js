const asyncFunction1 = (cb) => {
  setTimeout(() => {
    console.log("Async function 1");
    cb();
  }, 1000);
};

const asyncFunction2 = (cb) => {
  setTimeout(() => {
    console.log("Async function 2");
    cb();
  }, 1000);
};

const asyncFunction3 = (cb) => {
  setTimeout(() => {
    console.log("Async function 3");
    cb();
  }, 1000);
};
//developer

const main = () => {
  console.log("Start");
  asyncFunction1(() => {
    asyncFunction2(() => {
      asyncFunction3(() => {
        console.log("All completed");
      });
    });
  });
};

main();
