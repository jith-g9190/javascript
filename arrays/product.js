var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names

// print avaialable product name

// print out of stock product details


// list all products whose price > 250

// low cost product

// is there any item available under 200


// console.log(products.map(product=>product[1]));

// console.log(products.filter(product=>product[3]>0).map(product=>product[1]));


// console.log(products.filter(product=>product[3]==0).map(product=>product[1]));

// console.log(products.filter(product=>product[2]>250).map(product=>product[1]));

// console.log(products.filter(product=>product[2]<=200).map(product=>product[1]));

// var low_cost=0;
// for(product of products){
//     if(product[3]<=low_cost){
//         low_cost=product[3]
//     }
// }
// console.log(product[1]);

// var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost);

// var high=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
// console.log(high);

// console.log(products.find(item=>item[1]=="complan"));

console.log(products.some(item=>item[2]>200));

console.log(products.foreach(item=>item[1]));

products.sort((item1,item2)=>item1[2]-item2[2].foreach(item=>console.log(item)))