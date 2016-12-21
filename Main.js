function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}
Car.prototype.toString = function () {
    return this.model + "has done" + this.miles + "miles";
}

var accord = new Car("Accord", 2002, 5000);
var civic = new Car("Civic", 2003, 7000);

console.log(accord.toString());
console.log(civic.toString());

var myModule = {
    myProperty: "someValue",
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },
    // a very basic method
    saySomething: function () {
        console.log("Where in the world is Paul Irish today?");
    },
    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },
    // override the current configuration
    updateMyConfig: function (newConfig) {

        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};
// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();
// Outputs: Caching is: enabled
myModule.reportMyConfig();
// Outputs: fr
myModule.updateMyConfig({
    language: "fr",
    useCaching: false
});
// Outputs: Caching is: disabled
myModule.reportMyConfig();


var testModuel = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log("counter value prior to reset " + counter);
            counter = 0;
        }
    };
})();
testModuel.incrementCounter();
testModuel.resetCounter();


var Utility = (function () {
    var appendWith = "MSO";
    var Logger = function (msg) {
        console.log(appendWith + msg);
    };

    return {
        Logger:Logger
    };
})();
Utility.Logger("Error encountered");

//Singleton Pattern
var mySingleton = (function () {
    var instance;
    var init = function () {
        var privateMethod = function () {
            console.log("I am a private method");
        };

        var privateVariable = "I am private variable";
        var privateRandomNumber = Math.random();
        return {
            //public method and variables
            publicMethod: function () {
                console.log("The public can see me");
            },
            publicProperty: "I am also public",

            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber());
console.log(singleB.getRandomNumber());