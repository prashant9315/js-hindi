const mynums = [1, 2, 3];

const newnums = mynums.reduce((acc, currentval) => {
  console.log(`acc:${acc},curr:${currentval}`);
  return acc + currentval;
}, 0);

console.log(newnums);
//reduce use karte hai to return overall operation we want,we pass to accumulator and currentval
//and , ke baad accumulator ki initial value pass karte hai like humne 0 pass kiya
//har bar accumulator previous sum ke saath array ki new value add karta jaayega
