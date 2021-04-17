function createGreeter(myName) {
   return function() {
    console.log(myName);
    setTimeout(function() {
      console.log(myName);
    }, 1000);

    myName = 'Manu';
  }
}

const greetMax = createGreeter('Max');
const greetManu = createGreeter('Manu');
greetMax();