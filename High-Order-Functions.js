// Flattening

let arr = [[1, 2, 3], [4, 5], [6]];
let result = arr.reduce((acc, curr) => acc.concat(curr))
console.log(result)


// Your own loop 

function loop (value,test,update, body){
    for(value; test(value); value = update(value)){
        body(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

//Everything
function every(array, test){
    for(let x = 0; x <= (array.length) - 1; x++){
        if(!test(array[x])){
            return false
        }
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
