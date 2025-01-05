var Person = /** @class */ (function () {
    function Person(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.printInfo = function () {
        console.log("Name: " + this.name + ", Age: " + this.age + ", ID: " + this.id);
    };
    return Person;
}());
