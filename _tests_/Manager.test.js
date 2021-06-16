const Manager = require("../lib/Manager")


describe("Manager", () =>{
    it("Should set an office number", () => {
        let officenum = 990
        let employee = new Manager("Ana",33,"ana@gmail.com",officenum)
        expect(employee.officenum).toEqual(officenum)
    });

    describe("getOfficeNum", () => {
        it("Should return office number", () => {
            let officenum = 990
            let employee = new Manager("Ana",33,"ana@gmail.com",officenum)
            expect(employee.getOfficeNum()).toEqual(officenum)
        })
    })

    describe("getRole", () => {
        it("Should return 'Manager'", () => {
            let role = 'Manager'
            let employee = new Manager("Ana",33,"ana@gmail.com",990)
            expect(employee.getRole()).toEqual(role)
        })
    })
})