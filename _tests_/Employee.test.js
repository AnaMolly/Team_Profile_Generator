const Employee = require("../lib/Employee")

describe("Employee", () =>{
    it("Should set a name", () => {
        let name = "Ana"
        let employee = new Employee(name,33,"ana@gmail.com")
        expect(employee.name).toEqual(name)
    });

    it("Should set an id",()=>{
        let id = 33
        let employee = new Employee("Ana",id,"ana@gmail.com")
        expect(employee.id).toEqual(id)
    });

    it("Should set an email",()=>{
        let email = "ana@gmail.com"
        let employee = new Employee("Ana",33, email)
        expect(employee.email).toEqual(email)
    });

    describe("getName", () => {
        it("Should return name", () => {
            let name = "Ana"
            let employee = new Employee(name,33,"ana@gmail.com")
            expect(employee.getName()).toEqual(name)
        })
    })
    describe("getID", () => {
        it("Should return id", () => {
            let id = 33
            let employee = new Employee("Ana",id,"ana@gmail.com")
            expect(employee.getID()).toEqual(id)
        })
    })
    describe("getEmail", () => {
        it("Should return email", () => {
            let email = "ana.kay@gmail.com"
            let employee = new Employee("Ana",33, email)
            expect(employee.getEmail()).toEqual(email)
        })
    })
    describe("getRole", () => {
        it("Should return 'Employee'", () => {
            let role = 'Employee'
            let employee = new Employee("Ana",33,"ana@gmail.com")
            expect(employee.getRole()).toEqual(role)
        })
    })

})