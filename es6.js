
const obj = { innerObj: {
    name:"sungjin",
    age:30
} }

const {innerObj : { name : myName, age: myAge}} = obj

console.log(myName,myAge)


// array distruct
const [c,,,,d] = [1,2,3,4,5]
console.log(c,d)

const [e,f,...g] = [6,7,8,9,10]
console.log(e,f,g)

// es6 swap
let a = 8, b = 6;
[a,b] = [b,a]
console.log(a,b)


// back tick
const varA = "b"
const varB = "a"
const varC = `${varA} ++
${varB}`
console.log(varC)


// no function keyword
const bicycle = {
    gear: 2,
    setGear(newGear)  {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);

  // 생성자 함수
function BuildHuman (name,age) {
    this.name=name;
    this.age=age;
}

const hum = new BuildHuman("sungjin",30);
console.log(hum)

class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

// class getter, setter
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);