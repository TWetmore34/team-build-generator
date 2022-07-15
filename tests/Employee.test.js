let Employee = require('../dist/classes')
describe('classes', () => {
    describe('Employee', () => {
        it('It should hold the name of whatever is passed in as its first argument', () => {
            let employee = new Employee.Employee('james');
            expect(employee.name).toEqual('james','0013')
        });

        it('it should hold the employee ID number of any person in the object', () => {
            let employee = new Employee.Employee('james','0013');
            expect(employee.id).toEqual('0013');
        });

        it('It should hold the email of any person passed into the object', () => {
            let employee = new Employee.Employee('james','0013', 'JamieBoy@gmail.com');
            expect(employee.email).toEqual('JamieBoy@gmail.com');
        });

        it('It should return the employee name on running getName', () => {
            let employee = new Employee.Employee('James', '0013', 'JamieBoy@gmail.com')

            expect(employee.getName()).toEqual('James')
        });

        it('It should return the employee email on running getEmail', () => {
            let employee = new Employee.Employee('James', '0013', 'JamieBoy@gmail.com')

            expect(employee.getEmail()).toEqual('JamieBoy@gmail.com')
        });

        it('It should return the employee role on running getRole', () => {
            let employee = new Employee.Employee('James', '0013', 'JamieBoy@gmail.com')

            expect(employee.getRole()).toEqual('employee')
        });
        
        it('It should store a name value from Employee',() => {
            let manager = new Employee.Manager('1002').super('Julie', '0010', 'JuliesThaBest@hotmail.com');

            expect(manager.name).toEqual('Julie')
        })

        it('It should store an office number', () => {
            let manager = new Employee.Manager('1002');

            expect(manager.officeNumber).toEqual('1002')
        })
    });
});
