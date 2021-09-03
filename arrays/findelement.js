var arr=[10,11,12,13,14,15]
var element=14,flag=0;
for(let num of arr){
    if(num==element){
        flag++;
        break;
    }
}
console.log(flag==0?"elment not found":"element found");