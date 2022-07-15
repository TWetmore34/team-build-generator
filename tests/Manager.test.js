let Employee = require('../dist/classes')
describe('manager', () => {
    it('It should store a name value from Employee',() => {
        let manager = new Employee.Manager('Julie', '0010', 'JuliesThaBest@hotmail.com', '1002');
    
        expect(manager.name).toEqual('Julie')
    });
    
    it('It should store an office number', () => {
        let manager = new Employee.Manager('Julie', '0010', 'JuliesThaBest@hotmail.com', '1002');
    
        expect(manager.officeNumber).toEqual('1002')
    });
    it('Should store a role for the manager class', () => {
        let manager = new Employee.Manager('Julie', '0010', 'JuliesThaBest@hotmail.com', '1002');
    
        expect(manager.role).toEqual('Manager')
    });
})
