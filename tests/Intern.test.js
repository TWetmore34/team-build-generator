const Employee = require('../dist/classes')
describe('intern', () => {
    it('Should have a name value stored', () => {
        intern = new Employee.Intern('TJ', '9999', 'tjwetmore34@gmail.com', 'KSU');

        expect(intern.getName()).toEqual('TJ');
    });
    
    it('Should have an id value stored', () => {
        intern = new Employee.Intern('TJ', '9999', 'tjwetmore34@gmail.com', 'KSU');

        expect(intern.id).toEqual('9999');
    });

    it('Should have an email value stored', () => {
        intern = new Employee.Intern('TJ', '9999', 'tjwetmore34@gmail.com', 'KSU');

        expect(intern.getEmail()).toEqual('tjwetmore34@gmail.com');
    });

    it('Should have a role value stored', () => {
        intern = new Employee.Intern('TJ', '9999', 'tjwetmore34@gmail.com', 'KSU');

        expect(intern.getRole()).toEqual('Intern');
    });

    it('Should have a school value stored', () => {
        intern = new Employee.Intern('TJ', '9999', 'tjwetmore34@gmail.com', 'KSU');

        expect(intern.school).toEqual('KSU');
    });
});