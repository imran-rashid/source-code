const numbers = [1, 2, 3]; // new Array()
const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

// console.log(numbers);

const companyMember = {
  company: 'Academind',
  greet() {
    console.log('Hi!');
  }
};

const employee = {
  name: 'Max',
  age: 31
};

const boss = {
  name: 'Manu',
  age: 32,
  title: 'Head of Tutorials'
};

employee.__proto__ = companyMember;
boss.__proto__ = companyMember;

boss.greet();
employee.greet();
console.log(boss.company);
console.log(companyMember.__proto__.__proto__);