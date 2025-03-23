class Employee {
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this._salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._firstName = value;
    } else {
      throw new Error("Invalid firstName. Must be 2-50 Latin characters.");
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._lastName = value;
    } else {
      throw new Error("Invalid lastName. Must be 2-50 Latin characters.");
    }
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (/^[A-Za-z ]+$/.test(value) && value.trim().length > 0) {
      this._profession = value;
    } else {
      throw new Error("Invalid profession. Must contain only Latin characters and spaces.");
    }
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (typeof value === 'number' && value > 0 && value < 10000) {
      this._salary = value;
    } else {
      throw new Error("Salary must be a number between 1 and 9999.");
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this._employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this._employees.push(employee);
    } else {
      throw new Error("Invalid employee");
    }
  }

  getEmployees() {
    return this._employees;
  }

  findEmployeeByName(firstName) {
    const employee = this._employees.find(emp => emp.firstName === firstName);
    if (!employee) throw new Error("Employee not found");
    return employee;
  }

  getEmployeeIndex(firstName) {
    return this._employees.findIndex(emp => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.getEmployeeIndex(firstName);
    if (index === -1) throw new Error("Employee not found");
    this._employees.splice(index, 1);
  }

  getTotalSalary() {
    return this._employees.reduce((sum, emp) => sum + emp.salary, 0);
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this._employees.length}`;
  }
}

const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
company.removeEmployee("John");
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
