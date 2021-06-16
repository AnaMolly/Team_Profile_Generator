const Engineer = require("../lib/Engineer")


describe("Engineer", () =>{
    it("Should set a github link", () => {
        let github = "https://github.com/AnaMolly"
        let employee = new Engineer("Ana",33,"ana@gmail.com",github)
        expect(employee.github).toEqual(github)
    });

    describe("getGithub", () => {
        it("Should return github link", () => {
            let github = "https://github.com/AnaMolly"
            let employee = new Engineer("Ana",33,"ana@gmail.com",github)
            expect(employee.getGithub()).toEqual(github)
        })
    })

    describe("getRole", () => {
        it("Should return 'Engineer'", () => {
            let role = 'Engineer'
            let employee = new Engineer("Ana",33,"ana@gmail.com","https://github.com/AnaMolly")
            expect(employee.getRole()).toEqual(role)
        })
    })
})