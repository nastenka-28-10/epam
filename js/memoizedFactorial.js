function calculationFactorial(){
  let cache = {};
  return (n) => {
    let result=1;
    for (i=n; i>=1; --i){
      if (i in cache) {
        console.log(`fetching cache[${i}] = ${cache[i]}...`);
        result = cache[i]; 
        if (i===n) {
          break;
        } else{
          for (j=i; j<=n; j++){
            result*=j;
          }
          cache[n] = result;
          break;
        }
      } else {
        result*=i;
      }
      cache[n] = result;
    }
    console.log(cache);
    console.log(`result:   ${result}`);
    console.log(`-----------------------------------`);
    return result;
  }
}

let memoizedFactorial = calculationFactorial();
let fact5 = memoizedFactorial(5);
let fact10 = memoizedFactorial(10);
let fact15 = memoizedFactorial(15);
