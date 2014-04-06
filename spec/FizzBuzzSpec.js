describe('fizz buzz', function(){
  var fizzBuzz;
    beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  it('should return the 1 for 1', function(){
    expect(fizzBuzz.get(1)).toEqual(1);
  });
  it('should Fizz for 3', function(){
    expect(fizzBuzz.get(3)).toEqual('Fizz');
  });
  it('should Fizz for 6', function(){
    expect(fizzBuzz.get(6)).toEqual('Fizz');
  });
  it('should Buzz for 5', function(){
    expect(fizzBuzz.get(5)).toEqual('Buzz');
  });
  it('should Buzz for 10', function(){
    expect(fizzBuzz.get(10)).toEqual('Buzz');
  });
  it('should FizzBuzz for 15', function(){
    expect(fizzBuzz.get(15)).toEqual('FizzBuzz');
  });
  it('should FizzBuzz for 30', function(){
    expect(fizzBuzz.get(30)).toEqual('FizzBuzz');
  });
  it('test range 1,2,Fizz,4', function(){
    expect(fizzBuzz.range(1,4)).toEqual('1,2,Fizz,4');
  });
  it('test range Fizz,13,14,FizzBuzz', function(){
    expect(fizzBuzz.range(12,15)).toEqual('Fizz,13,14,FizzBuzz');
  });
  it('test range 1 to 100', function(){
    range1_to_100 = [];
    for (i=1;i<=100;i++){
	  range1_to_100.push(i);
	}
	range1_to_100 = range1_to_100.map(function(i){
	  return i%15 === 0 ? 'FizzBuzz':i;
	}).map(function(i){
	  return i%5 === 0 ? 'Buzz':i;
	}).map(function(i){
	  return i%3 === 0 ? 'Fizz':i;	
	})
	expect(fizzBuzz.range(1,100)).toEqual(range1_to_100.join());
  });
});
