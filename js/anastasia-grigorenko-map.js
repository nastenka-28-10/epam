const map_ = function(array1, callbackfn, thisArg){
            let result = [];
            for (let i = 0; i < array1.length; ++i){
                result.push(callbackfn(array1[i], i, array1));
            }
            return result;
        };
const callbackfn=function(object){
    return object.name;
}
/*------------------test---------------------*/
obj1={
    name:"Nastya",
    age:18
};
obj2={
    name:"Ira",
    age:21
};
obj3={
    name:"Ksusha",
    age:23
};

let testArr=[obj1,obj2,obj3];
console.log(testArr);



let test=map_(testArr,callbackfn);
console.log(test);