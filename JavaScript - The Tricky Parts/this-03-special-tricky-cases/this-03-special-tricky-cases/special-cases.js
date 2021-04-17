class Person {
  constructor() {
    this.age = 31;
  }

  greet() {
    console.log('My age: ' + this.age);
  }

  greetWithDelay() {
    setTimeout(function() {
      console.log(this);
      console.log('My age: ' + this.age);
    }, 1500);
  }
}

const max = new Person();
max.greet();
max.greetWithDelay();

const btn = document.querySelector('button');

// setTimeout(function() {
//   console.log(this);
// }, 1000);

btn.addEventListener('click', function() {
  console.log(this);
});
