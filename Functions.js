//Minimum
function min(num1, num2){
    if(num1 < num2){
        return num1
    }
    else
        return num2
}


// Recursion
function isEven(number){

        if (number == 0){
            return true
        }
        else if (number == 1)
            return false
            
        return isEven(number -2)
    }

console.log(isEven(50))

// Bean Counting
function countBs (string){
    let nob = 0
    for(char of string){
        if (char == "B"){
            nob += 1
        }
    }
    return nob
}


function countChar(string, letter){
    let noc = 0
    for(char of string){
        if (char == letter){
            noc += 1
        }
    }
    return noc
}


console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
