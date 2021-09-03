for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 7; j > i; j--) {
         str+= " "
    }
    for (let star = 1; star <= i; star++) {
         str+= "*"
    }
    console.log(str);
}

