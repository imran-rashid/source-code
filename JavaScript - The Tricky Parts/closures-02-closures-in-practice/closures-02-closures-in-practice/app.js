function createGreeter(myName) {
   return function() {
    console.log(myName);
  }
}

const greetMax = createGreeter('Max');
const greetManu = createGreeter('Manu');
greetMax();