function count() {
  let count = 1;
  return () => {
    count++;
    return count;
  };
}

const c = count();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

const fact = () => {
  let result = 1;
  let count = 1;
  return () => {
    result *= count;
    count++;
    return result;
  };
};

const ccc = fact();

console.log(ccc());

let nu = null;

console.log(nu ?? []);
