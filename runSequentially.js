async function runSequentially(functions) {
  // Write your code here
  let arr = [];
  for(i=0; i<functions.length; i++) {
	arr.push(await functions[i]());
  }
  return arr;
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
      counter += 1;
      resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if(promise) {
  promise.then(result => console.log(result))
  .catch(error => console.log("Error: " + error));
}
module.exports.runSequentially = runSequentially;