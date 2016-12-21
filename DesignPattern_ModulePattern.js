var myModulePatternClass = (function () {
    var myPrivateVariable;
    var privateRandomNumber = Math.random();

    var privateMethod1 = function () {
        console.log("I am private method");
    };
    var privateMethod2 = function () {
        console.log("I am private method2, exposed to public");
    };
    var getRandomNumber = function () {
        console.log(privateRandomNumber);
    };

    return {
        privateMethod2: privateMethod2,
        getRandomNumber: getRandomNumber
    }
})();

myModulePatternClass.privateMethod2();//OUTPUT: I am private method2, exposed to public
myModulePatternClass.getRandomNumber();//OUTPUT: Some Random Number 
myModulePatternClass.privateMethod1();// OUTPUT: Error will come as it is private method and not exposed publicly


