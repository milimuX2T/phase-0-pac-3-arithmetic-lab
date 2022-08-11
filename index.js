number = 10;

function add() {
  return (number += 5);
}
add()

function subtract() {
    return (number -= 5);
  }

  subtract()

  function multiply() {
    return (number *= 5);
  }

  multiply()

  function divide() {
    return (number /= 5);
  }

  divide()

  function add(a,b) {
    return (a+=b);
  }

  add(10 , 5);


  function subtract(a,b) {
    return (a-=b);
  }

  subtract(10 , 5);


  function multiply(a,b) {
    return (a*=b);
  }

  multiply(10 , 5);


  function divide(a,b) {
    return (a/=b);
  }

  divide(10 , 5);


let n = 5
function increment(n) {
    console.log (n++)
    return n++;

}

increment(n);




function decrement(n) {
    console.log (n--)
    return n--;

}
decrement(n)

function makeInt(n){
  return parseInt(n, 10);
}
makeInt(n); 

function preserveDecimal(n){
  return parseFloat (n);
}
preserveDecimal(n);






