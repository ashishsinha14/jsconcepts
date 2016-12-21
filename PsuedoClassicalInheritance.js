//Inheritance using PsudeoClassical pattern
var Human = function () {

};

Human.prototype = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    sayGender: function () {
        console.log(this.name + 'says my Gender is' + this.gender);
    },
    sayPlanet: function () {
        console.log(this.name + 'says my planet is' + this.planetOfBirth);
    }
};

var extendObj = function (childObj, parentObj) {
    var tmpObj = function () { };
    tmpObj.prototype = parentObj.prototype;
    childObj.prototype = new tmpObj();
    childObj.prototype.constructor = childObj;
}

var Male = function (name) {
    this.name = name;
    this.gender = 'Male';
};

extendObj(Male, Human);

var Female = function (name) {
    this.name = name;
    this.gender = 'Female';
};
extendObj(Female, Human);


var male1 = new Male('David');
Male.prototype.planetOfBirth = 'Mars';
male1.sayGender();
male1.sayPlanet();
var female1 = new Female('Jane');
female1.sayGender();
female1.sayPlanet();