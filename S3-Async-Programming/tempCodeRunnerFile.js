/*

Call back function -> Promises
const asyncFunction1 = (cb) => {
    setTimeout(() => {
        console.log("Async function 1");
        cb();
    },1000)
}

const asyncFunction2 = (cb) => {
    setTimeout(() => {
        console.log("Async function 2");
        cb();
    },1000)
}

const asyncFunction3 = (cb) => {
    setTimeout(() => {
        console.log("Async function 3");
        cb();
    },1000)
}
//developer 

const main = () => {
    console.log("Start"); 
    asyncFunction1(()=> {
        asyncFunction2(() => {
            asyncFunction3(() => {
                console.log("All completed")
            })
        })
    })
}

main();

*/

const asyncFunction1 = () => {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function 1");
      resolve();
    }, 1000);
  });
  return prom;
};

const asyncFunction2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function 2");
      resolve();
    }, 1000);

  });
};

const asyncFunction3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function 3");
      resolve();
    }, 1000);
  });
};
//developer

const main = () => {
  console.log("Start");

  asyncFunction1()
    .then(() => {
      asyncFunction2()
        .then(() => {
          asyncFunction3()
            .then(() => {
                console.log("All Done")
            })
            .catch(() => {
              console.log("asyncFunction3 failed. ");
            });
        })
        .catch(() => {
          console.log("asyncFunction2 Failed.");
        });
    })
    .catch(() => {
      console.log("asyncFunction1 Failed");
    });
};

main();
