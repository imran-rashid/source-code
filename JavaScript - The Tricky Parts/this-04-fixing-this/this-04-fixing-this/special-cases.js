class Person {
  constructor() {
    this.age = 31;
  }

  greet() {
    console.log('My age: ' + this.age);
  }

  greetWithDelay() {
    // const that = this;
    setTimeout(function() {
      console.log(this);
      console.log('My age: ' + this.age);
    }.bind(this), 1500); // call(this), apply(this)
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
