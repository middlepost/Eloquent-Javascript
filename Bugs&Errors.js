// Retry 

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}


function reliableMultiply(a, b) {
    try{
        return primitiveMultiply(a,b)
    } catch(error){
        if(error instanceof MultiplicatorUnitFailure){
            return reliableMultiply(a,b)
        }
    }
  }

  console.log(reliableMultiply(8, 8));



// The locked BOX 
const box = new class {
  locked = true;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true;  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
    let wasunlocked = 0
  try {
    if(box.content()){
      wasunlocked = 1
      body()
    }}
    catch (e) {
      if(e = "Locked!"){
        box.unlock()
        body()
      }
    } finally{
      if(wasunlocked == 0){
        box.lock()
      }
    }
  }

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);


