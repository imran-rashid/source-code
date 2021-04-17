const btn = document.querySelector('button');

setTimeout(function() {
  console.log(this);
}, 1000);

btn.addEventListener('click', function() {
  console.log(this);
});