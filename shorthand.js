//ES2015 SHORTHAND

//Same Keys And Values

function createInstructor(firstName, lastName){
	return{
		firstName,
		lastName
	}
}

//Computed Property Names

let favoriteNumber = 42;

const instructor = {
	firstName: "Colt",
	[favoriteNumber]: "That is my favorite!"
}

//Object Methods

const instructor1 = {
	firstName: "Colt",
	sayHi(){
		return "Hi!";
	},
	sayBye(){
		return this.firstName + " says Bye!"
	}
}

//createAnimal function

const d = createAnimal("dog", "bark", "woof!");

d.bark();

const s = createAnimal("sheep", "bleet", "Baaa");

s.bleet();

function createAnimal(animal, verb, sound){
	return{
		animal,
		[verb](){
			return sound;
		}
	}
}