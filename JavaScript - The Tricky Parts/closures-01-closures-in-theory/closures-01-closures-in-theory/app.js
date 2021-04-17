function createGreeter() {
  const myName = 'Max';

  return function() {
    console.log(myName);
  }
}

const greet = createGreeter();
greet();