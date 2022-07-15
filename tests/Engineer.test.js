let Employee = require('../dist/classes');

describe('engineer', () => {
    it('Should have a name value stored', () => {
        engineer = new Employee.Engineer('TJ', '9999', 'tjwetmore34@gmail.com', 'TWetmore34');

        expect(engineer.getName()).toEqual('TJ');
    });

    it('Should have an id value stored', () => {
        engineer = new Employee.Engineer('TJ', '9999', 'tjwetmore34@gmail.com', 'TWetmore34');

        expect(engineer.id).toEqual('9999');
    });

    it('Should have an email value stored', () => {
        engineer = new Employee.Engineer('TJ', '9999', 'tjwetmore34@gmail.com', 'TWetmore34');

        expect(engineer.getEmail()).toEqual('tjwetmore34@gmail.com');
    });

    it('Should have a role value stored', () => {
        engineer = new Employee.Engineer('TJ', '9999', 'tjwetmore34@gmail.com', 'TWetmore34');

        expect(engineer.getRole()).toEqual('Engineer');
    });

    it('Should have a github property stored', () => {
        engineer = new Employee.Engineer('TJ', '9999', 'tjwetmore34@gmail.com', 'TWetmore34');

        expect(engineer.github).toEqual('TWetmore34');
    });
});