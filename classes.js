class Animal {
    constructor(animal) {
        this.animal = animal
    }
    sayHi() {
        console.log(`Hello, I am a ${this.animal}!`)
    }
    static sayHi() {
        console.log('Hello from Animal class!')
    }
}

class Cat extends Animal {
    constructor(animal, name, color, age) {
        super(animal)
        this.name = name
        this.color = color
        this.age = age 
    }
    introduceYourself() {
        console.log(`My name is ${this.name}. I have ${this.color} fur. I am ${this.age} years old.`)
    }
    static sayHi() {
        console.log('Hello from Cat class!')
    }
}

Animal.sayHi()
Cat.sayHi()

const cat1 = new Cat('cat', 'Fluffy', 'black', '3')
console.log(cat1)

cat1.sayHi()
cat1.introduceYourself()

// ______________________________________________________________________________________________________________

function showAfterDelay() {
    let button = document.getElementById("consoleButton")
    button.style.backgroundColor = "violet"
    setTimeout(() => console.log("One second had passed!"), 1000)
}

// ______________________________________________________________________________________________________________

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].author.login));