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
class Group {
    constructor(){
        this.member = []
    }
    add(value){
        if (!(value in this.member)){
            this.member.push(value)
        }
    }
    delete(value){
        if(value in this.member){
            this.member.pop(value)
        }
    }
    has(value){
        if (value in this.member){
            return true
        }
        else
            return false
    }

    static from(arrayit){
        let group = new Group()
        for(let x = 0; x <= arrayit.length-1; x++){
            group.add(arrayit[x])
        }

        }
    }

let group = Group.from([10, 20]);
console.log(group.has(10));

















