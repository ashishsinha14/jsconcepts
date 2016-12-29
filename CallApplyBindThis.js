var Animal = (function () {
    var produceSound = function (sound) {
        console.log(sound);
    }
    return {
        produceSound: produceSound
    }
})();
Animal.produceSound("wooooof");// O/P would be wooooof

//Now lets change the code little bit
var Animal1 = (function () {
    var produceSound = function (sound) {
        console.log(this.sound);
    };
    var produceSoundAgain = function (sound) {
        console.log(sound);
    };
    return {
        produceSound: produceSound,
        produceSoundAgain: produceSoundAgain
    }
})();
Animal1.produceSound("woof");// O/P would be undefined, because now when you are trying to execute the function Animal1, since you have not provided the context it will start searching
//the context in upward manner and finally it will reach the global context i.e. windows and look for "sound" property, which it will not find and hence O/P will be undefined.

var Cat = (function () {
    this.sound = "Meoooooooowwwwww";
})();

//CALL
Animal1.produceSound.call(Cat);//O/P would be Meoooooooowwwwww as call will execute produceSound in "Cat" context where sound=Meoooooooowwwwww
Animal1.produceSoundAgain.call(Cat, "meow"); //O/P would be meow as call will execute produceSound in "Cat" context and pass argument as meow

//APPLY
Animal1.produceSound.apply(Cat);//O/P would be Meoooooooowwwwww as call will execute produceSound in "Cat" context where sound=Meoooooooowwwwww
Animal1.produceSoundAgain.apply(Cat, ["meow from apply"]);//O/P would be "meow from apply" as call will execute produceSound in "Cat" context and pass argument as "meow from apply"

//BIND
var makeSound = Animal1.produceSoundAgain.bind(Cat);
makeSound("meow meow");//O/P would be "meow meow" as call will execute produceSound in "Cat" context and pass argument as "meow meow"
var makeSound1 = Animal1.produceSound.bind(Cat);
makeSound1("Hello");//O/P would be Meoooooooowwwwww as call will execute produceSound in "Cat" context where sound=Meoooooooowwwwww

//*****************************************Another Example**********************************************************************
var person = {
    name: "James Smith",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
}

//call attaches this into function and executes the function immediately:
person.hello.call(person, "world"); // output: "James Smith says hello world"

//bind attaches this into function and it needs to be invoked separately like this:
var helloFunc = person.hello.bind(person);
helloFunc("world");  // output: "James Smith says hello world"