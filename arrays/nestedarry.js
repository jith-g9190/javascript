var employees=[
    [1000,"ravi",23000,"developer"],
    [1001,"ram",12000,"developer"],
    [1002,"raju",32700,"qa"],
    [1003,"nikil",12200,"qa"]
]

// console.log(employees.map(emp=>emp[1]));


console.log(employees.filter(emp=>emp[2]>23000 & emp[3]=="developer").map(emp=>emp[1]));




// for(let employee of employees){
//     console.log(employee[1]);
// }

// for(let employee of employees){
//     console.log(employee[3]);
// }

// for(let employee of employees){
//     if(employee[2]>23000){
//         console.log(employee[1]);
//     }
// }

// for(let employee of employees){
//     if(employee[2]>=32700){
//         console.log(employee[1]);
//     }
// }

// for(let employee of employees){
//     if(employee[2]<=12000){
//         console.log(employee[1]);
//     }
// }
