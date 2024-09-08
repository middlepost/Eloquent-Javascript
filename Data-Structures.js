// The sum of a range 
function range(start, end, step = 1){
    let array = []
    if (step < 0){
        for(start; end <= start; start += step){
            array.push(start)
        }
    }
    else if (step > 0){
        for(start; start <= end; start += step){
            array.push(start)
        }
    }
    return array
}

function sum(array){
    let sum = 0
    for(num of array){
        sum += num
    }
    return sum
}

console.log(sum(range(1, 10)));
console.log(range(1, 10));
console.log(range(5, 2, -1));


// Reversing an array 
function reverse(array){
    let newarray = []
    for(let i = array.length-1;  i >= 0; i--){
        newarray.push(array[i])
    }
    return newarray
}

function reversearray(array){
     // incomplete

    let start = null 
    let end = null
   
    return array
}


let myArray = ["A", "B", "C"];
console.log(reverse(myArray));


function arraytolist(array){
    let newlist = null
    for(let i = array.length - 1; i >= 0; i--){
        newlist = { value: array[i], rest: newlist };
    }
    return newlist
}

function listToArray(list){
    let ar = []
    for(let node = list; node; node = node.rest){
        ar.push(list.value)
    }
    return ar

}

function prepend(value, list) {
    return {value, rest: list};
  }
  
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

console.log(arraytolist([10, 20]));

function deepEqual(arg1, arg2){
    if(typeof arg1 == )
}