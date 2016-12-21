//*******************Method Invocation Pattern*********************************************************** 
var person = {
    name: 'Ashish',
    age: 34,
    greet: function () {
        console.log('Hi' + this.name + "Your age is " + this.age);
    }
};

person.greet();
//*******************************************************************************************************

//*****************Function Invocation Pattern***********************************************************
//Problem :For functions that are not properties on objects like function yerasOld, this is bound to the global object
person.calculateAgeWrong = function (yearsFromNow) {
    function yearsOld() {
        return this.age + yearsFromNow; //NaN
    }

    alert('I will be ' + yearsOld() + ' years old ' + yearsFromNow + ' years from now.');
}


person.calculateAgeWrong(10);

//Most developers overcome this problem by assigning this to a variable in the parent function. For example:
person.calculateAge = function (yearsFromNow) {
    var self = this;
    function yearsOld() {
        return self.age + yearsFromNow;
    }
    alert('I will be ' + yearsOld() + ' years old ' + yearsFromNow + ' years from now.');
}
person.calculateAge(10);
//*******************************************************************************************************


///***********************Constructor Invocation Pattern*************************************************

var Human = function (name) {
    this.name = name;
};

Human.prototype.greet = function () {
    return this.name + "says Hi";
}

alert(new Human("Akash").greet());