function FizzBuzz() {
}
FizzBuzz.prototype.get = function(n) {
  var result = [];
  if (!(n % 3))
    result.push('Fizz');
  if (!(n % 5)) 
    result.push('Buzz');
  return result.join("") || n;
};

FizzBuzz.prototype.range = function(start,end) {
  var result = []
  for (i=start; i <=end; i++){
    result.push(this.get(i));
  }
  return result.join();
};
