// Looping through a triangle

for(let count = "#"; count.length <= 7; count += "#"){
    console.log(count)
}

// FizzBuzzz
for(let count = 1; count <= 100; count += 1){
    if ((count % 3) == 0){
        console.log("Fizz")
    }
    else if ((count % 5 ) == 0){
        console.log("Buzz")
    }
    else if ((count % 3 & count % 5 ) ==  0){
        console.log("FizzBuzz")
    }
    else 
        console.log(count)
}

// Chessboard : Hardcoded

let size = 8

let type1 = " # # # #"
let type2 = "# # # # "
for (let count = 1; count <= size; count += 1){
    if ((count%2) == 0){
        console.log(type1)
    }
    else 
        console.log(type2)
}