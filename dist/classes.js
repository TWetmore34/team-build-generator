class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function () {
    return this.role;
};

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }
};

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, 'Engineer')
        this.github = github
    }
};

class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email, 'Intern')
    this.school = school;
}
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}