const Intern = require("../lib/Intern")


describe("Intern", () =>{
    it("Should set a school", () => {
        let school = "UofT"
        let employee = new Intern("Ana",33,"ana@gmail.com",school)
        expect(employee.school).toEqual(school)
    });

    describe("getSchool", () => {
        it("Should return school", () => {
            let school = "UofT"
            let employee = new Intern("Ana",33,"ana@gmail.com",school)
            expect(employee.getSchool()).toEqual(school)
        })
    })

    describe("getRole", () => {
        it("Should return 'Intern'", () => {
            let role = 'Intern'
            let employee = new Intern("Ana",33,"ana@gmail.com","UofT")
            expect(employee.getRole()).toEqual(role)
        })
    })
})