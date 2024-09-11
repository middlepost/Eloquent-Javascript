// A vector type
class Vec {
    constructor (x,y){
        this.x = x
        this.y = y 
    }
    plus(vec){
         let nvec = new Vec 
         nvec.x = this.x + vec.x
         nvec.y = this.y + vec.y
         return nvec
    } 
    minus(vec){
        let nvec = new Vec
        nvec.x = this.x - vec.x
        nvec.y = this.y - vec.y
        return nvec
    }
    get length(){
        this.x = this.x ** 2
        this.y = this.y ** 2

        let distance = Math.sqrt(this.x + this.y)
        return distance
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

// Group
// Lesson learnt here is that the "in" keyword checks if the index of a value exists in js 
//and not if the value itself exists
class Group {
    constructor(){
        this.member = []
    }
    add(value){
        if (!this.member.includes(value)){
            this.member.push(value)
        }
    }
    delete(value){
        this.member = this.member.filter(m => m !== value)
    }
    has(value){
        return this.member.includes(value)
    }

    static from(arrayit){
        let hh = new Group()
        for(let x of arrayit){
            hh.add(x)
        }
        return hh
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));






// Iterable Group class

class GroupIT {
    constructor(){
        this.member = []
    }
    [Symbol.iterator](){
        let index = 0
        let arr = this.member
        return {
            next() {
                if(index < arr.length){
                    return {value: arr[index++], done: false }
                }
                else
                    return{value: undefined, done: true}
            }

        }
    }
    add(value){
        if (!this.member.includes(value)){
            this.member.push(value)
        }
    }
    delete(value){
        this.member = this.member.filter(m => m !== value)
    }
    has(value){
        return this.member.includes(value)
    }

    static from(arrayit){
        let hh = new GroupIT()
        for(let x of arrayit){
            hh.add(x)
        }
        return hh
    }
}

for (let value of GroupIT.from(["a", "b", "c"])) {
    console.log(value);
  }










