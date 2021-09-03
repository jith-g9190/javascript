var num = 2, low = 8, upp = 37;
var i = 1;


while (i <= upp) {
    let res = i ** num;
    if (low < res & res < upp) {
        console.log(i);

    }
    i++;
}
