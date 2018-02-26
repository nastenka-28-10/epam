function IncreaseValue(){
    let value = 0;
    function increase(){
        const arg = [...arguments];
        for (let i=0;i<arg.length;++i){
            value+=arg[i];
        }
        return value;
    }
    return increase;
}
let sum = IncreaseValue();
let result;
result = sum(1);
console.log(result);

result = sum(2);
console.log(result);

result = sum(3,4);
console.log(result);

result = sum(5,6,7);
console.log(result);