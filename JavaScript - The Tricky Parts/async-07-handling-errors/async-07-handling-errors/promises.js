function setTimer(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, duration);
    // resolve('It worked - earlier!');
  });
}

setTimer(2000)
  .then(function() {
    console.log('First timer completed!');
    return 123;
  })
  .then(function(data) {
    console.log('Second then');
    console.log(data);
    return setTimer(3000);
  })
  .then(function(data) {
    console.log('Second timer completed!');
    console.log(data);
  });

fetch('https://jsonplaceholder.typicode/todos/1', {})
  .then(function(response) {
    console.log('First then');
    return response.json();
  }, function() {
    console.log('Handling error');
    return 'Error handled!';
  })
  .then(
    function(data) {
      console.log(data);
    },
    function(err) {
      alert('This failed!');
      console.log(err);
    }
  );
