for (let row=1;row<=4;row++){
    let str="";
    for(let space=4;space>row;space--){
        str+=" "
    }
    for(let star=1;star<=row;star++){
        str+="* "
    }
    console.log(str);
}

// for this problem star is defined in rows and colums 
// the void space of each rows and colums gives the triangle shape
// create a equation for both sides of the triangle for better logic
// example c4-r1=3,c5-c2=3 and c1+r1=5,c2+r3=5