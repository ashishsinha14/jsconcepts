var human = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    sayGender: function () {
        alert(this.name + ' says my gender is ' + this.gender);
    },
    sayPlanet: function () {
        alert(this.name + ' was born on ' + this.planetOfBirth);
    }
};

var Male = function (name) {
    this.name = name;
    this.gender = 'Male';
}

var extendObject = function (childObject, parentObject) {
    var tmpObj = function () { };
    tmpObj.prototype = parentObj.prototype;
    childObj.prototype = new tmpObj();
    childObj.prototype.constructor = childObj;
}


