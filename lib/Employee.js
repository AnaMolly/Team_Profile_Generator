class Employee {
    constructor (name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName() {
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail () {
        return this.email
    }

    getTitle(){
        return this.title
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee