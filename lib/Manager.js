const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officNum) {
        super (name, id, email);
        this.officNum = officNum;
    };

    getRole() {
        return "Manager";
    };

    getOfficeNum() {
        return this.officNum;
    };
};

module.exports = Manager;
