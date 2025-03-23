class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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

class Developer extends Employee {
constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
}

addProgrammingLanguage(language) {
  if (!language?.trim() || this.programmingLanguages.includes(language)) {
    throw new Error("Programming language is invalid or already exists.");
  }
  this.programmingLanguages.push(language);
}
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (!tool?.trim() || this.designTools.includes(tool)) {
      throw new Error("Tool is invalid or already exists.");
    }
    this.designTools.push(tool);
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
    const exists = this._employees.some(
      emp => emp.firstName === employee.firstName && emp.lastName === employee.lastName
    );
    if (exists) {
      throw new Error("Employee with the same name and last name already exists.");
    }
    if (employee instanceof Employee) {
      this._employees.push(employee);
    } else {
      throw new Error("Invalid employee");
    }
  }

  getEmployees() {
    return this._employees;
  }

  getEmployeesByProfession(profession) {
    return this._employees.filter(emp => emp.constructor.name === profession);
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

export { Employee, Company, Designer, Developer, Manager };
