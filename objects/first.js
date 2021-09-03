var pattern="ABABCC"

var charector={}

for(let char of pattern){
    if(! char in charector){
        charector[char]=1
    }
    else{
        console.log(char);
        break;
    }

    
}

