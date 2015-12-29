class Person {
	
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = `${firstName} ${lastName}`;
	}

	greet() {
		return `Hello ${this.fullName}!`;
	}
}

export default Person;
