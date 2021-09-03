// localStorage.setItem("username","admin");
// localStorage.setItem("password","123456");
// localStorage.setItem("toekn","abc123");
// localStorage.setItem("accesstoken","123wer");
// localStorage.removeItem("accesstoken");




var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
var person2={pname:"ram pj",account_number:1001,balace:2000,password:"userone"}

localStorage.setItem(person1.account_number,JSON.stringify(person1))
localStorage.setItem(person2.account_number,JSON.stringify(person2))

function getBalance(account_number){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        console.log(user.balace);
    }
    else{
        console.log("invalid account number");
    }
}
function authenticate(account_number,password){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        if(user,password==password && user.account_number==account_number){
            console.log("login success");
        }
        else{
            console.log("invalid authentication");
        }
    }
    else{
        console.log("invalid acc number,login failed");
    }
}