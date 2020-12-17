// array destructuring matches by POSITION


const address = ["17671 Addison Rd", "Dallas", , "75287", "test"];

//const [ street, city, state, zip ] = address;

//console.log(`You are in ${state}`);

const [, city, state = "Alabama", zip, test ] = address;

console.log(`Leave ${state} ${zip} ${test}`);



// given an object
/*
const person = {
	name: "Carmen",
	age: 56, 
	location: {
		city: "Dallas",
		temp: 73
	}
}

	normally you would set vars equal to some property on person
		const name = person.name;
		const age = person.age;


	with es6 destructuring it's a lot easier - JUST ONE LINE!
 
	temp: temperature is temp AS temperature alias
	name = "Anonymous" provides a default
	name: firstName = "Anonymous" provides both alias and default;

const { name = "Anonymous", age } = person;
const { city, temp: temperature } = person.location;

console.log(`${name} is in ${city} ${age} and it is ${temperature} degrees.`)
*/

/*
console.log("object destructuring");

const book2 = {
	title: "some book name",
	author: "some author",
	publisher: {
	}
}

const { name: publisherName = "Self Published" } = book2.publisher;
console.log(publisherName);
*/

