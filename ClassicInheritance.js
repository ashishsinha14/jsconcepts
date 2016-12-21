//Inheritance using Functional Pattern
var Human = function () {
    var that = {};
    that.name = '';
    that.gender = '';
    that.planetOfBirth = 'Earth';

    that.sayGender = function () {
        console.log(that.name + "says, I am " + that.gender);
    };

    that.sayPlanet = function () {
        console.log(that.name + "says, I am born on" + that.planetOfBirth);
    };
    return that;
};


var Male = function (name) {
    var that = Human();
    that.name = name;
    that.gender = 'Male';
    return that;
};

//Here You can see the use of Closures
var male1 = new Male('Ashish');
male1.sayGender();
male1.sayPlanet();

