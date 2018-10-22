function reducer(arr, fn, initialValue){
	let prevValue = initialValue ? initialValue : arr[0];
	let start = initialValue ? 0 : 1;
	for (let i=start; i<arr.length; i++){	
		prevValue = fn(prevValue, arr[i], i, arr);	
        }
	return prevValue;
}

console.log(
  reducer([1,2,3], (prevValue, item) => {
    return prevValue + item;
  }, 0);
);

console.log(
  reducer([1,2,3], (prevValue, item) => {
    return prevValue + item;
  });
)
