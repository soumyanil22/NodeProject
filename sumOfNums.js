const input = [2, 3, 10, 22, 11];

function sum(arr) {
  let result;

  result = arr.reduce((accumulator, currVal) => {
    return accumulator + currVal;
  }, 0);

  return result;
}

const ans = sum(input);

console.log(ans);
