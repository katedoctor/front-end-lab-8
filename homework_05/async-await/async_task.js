const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};

/* Your code here */
async function doAsyncMagic(){
  for(var i=0; i<4;i++){
    try{
      var result = await console.log(asyncFn());
    } catch(e){
      console.log(error);
    }
  }
  return result;
}

doAsyncMagic(); // [true, true, true, true]

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

/* Your code here */
async function iterateRange(){
  var sum = 0;
  for await (const el of rangeGen()){
    sum += el;
  }
  return sum;
}

iterateRange();
