// 1. Define the IPerson interface
// Contains personal info, experience, and a method to return details
interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;

    getDetails(): string;
}

// 2. Abstract class Employee implementing IPerson
abstract class Employee implements IPerson {
    name: string;
    surname: string;
    experienceYears: number;

    protected salary: number;

    constructor(name: string, surname: string, experienceYears: number) {
        this.name = name;
        this.surname = surname;
        this.experienceYears = experienceYears;
        this.salary = 0;
    }

    protected abstract calculateSalary(): void;

    abstract getDetails(): string;
}

// 3. Concrete class Manager
class Manager extends Employee {
    private preferred: 'scrum' | 'kanban';

    constructor(name: string, surname: string, experienceYears: number, preferred: 'scrum' | 'kanban') {
        super(name, surname, experienceYears);
        this.preferred = preferred;
        this.calculateSalary();
        }

    protected calculateSalary(): void {
        this.salary = this.experienceYears * 500;
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience in ${this.preferred} and ${this.salary}$ salary`;
    }
}

// 4. Concrete class Developer
class Developer extends Employee {
    private programmingLanguage: 'js' | 'ts' | 'java' | 'python';
    
    constructor(name: string, surname: string, experienceYears: number, programmingLanguage: 'js' | 'ts' | 'java' | 'python') {
        super(name, surname, experienceYears);
        this.programmingLanguage = programmingLanguage;
        this.calculateSalary();
        }

    protected calculateSalary(): void {
      this.salary = this.experienceYears * 1000;
    }
    getDetails(): string {
      return `My name is ${this.name} ${this.surname}, I am a software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`;
    }
  }

// 5. Create instances to test

const manager = new Manager('Ida', 'Que', 8, 'scrum');
console.log(manager.getDetails());
// My name is Ida Que, I am a manager with 8 years of experience in scrum and 4000$ salary

const dev = new Developer('Elena', 'Tsvovna', 6, 'ts');
console.log(dev.getDetails());
// My name is Elena Tsvovna, I am a software developer with 6 years of experience in ts and 6000$ salary