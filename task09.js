// Task09 - create 2 functions: task09a and task09b
// First function should pass parameter and divide it on 2
// result function should return.
// Second function should call first function and 
// return it result concat with string "result - "
//
// For example: you get in second function a number 6
// Result of call both function shoul be like "result - 3"
function task09b(num){
return num/2;
}
var x=(task09b(4));
function task09(){
	return 'result-'+x
	
}
console.log(task09());