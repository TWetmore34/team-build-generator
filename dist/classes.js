class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.roll = 'employee';
    }
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function () {
    return this.roll;
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        this.role = 'Manager'
        this.name = super(name)
        
    super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee'
    }
}

module.exports = {
    Employee,
    Manager
}