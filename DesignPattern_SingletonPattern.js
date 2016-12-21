var mySingleton = (function () {
    var instance;
    var init = function () {
        var privateVar1;
        var privateVar2;
        var randomNumber = Math.random();
        var privateMethod1 = function () {
            console.log("I am Private Method1");
        };
        var privateMethod2 = function () {
            console.log("I am Private Method2");
        };
        return {
            exposedPrivateMethod1:privateMethod1,
            exposedPrivateMethod2:privateMethod2 
        }
    }
    return {
        getInstance: function () {
            if (instance !== null) {
                instance = init();
            }
            return instance;
        }
    }

})();
var obj = mySingleton.getInstance();
obj.exposedPrivateMethod1();