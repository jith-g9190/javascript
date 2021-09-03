var arr=[11,12,13,14,15,16]

var sum=arr.reduce((num1,num2=>num1+num2))
console.log(sum);


var min=arr.reduce((num1,num2=>num1<num2?num1:num2))
console.log(min);

var max=arr.reduce((num1,num2=>num1>num2?num1:num2))
console.log(max);