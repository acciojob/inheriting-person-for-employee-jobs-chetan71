// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Adjusted greet() to match expected test output
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of Person
    this.jobTitle = jobTitle;
  }

  // Method to greet with job details
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Attach classes to the global window object so that Cypress tests can access them
window.Person = Person;
window.Employee = Employee;

// Example usage (optional; can be removed if only used by Cypress tests)
// const person = new Person("Alice", 25);
// person.greet();

// const employee = new Employee("Bob", 30, "Manager");
// employee.jobGreet();
