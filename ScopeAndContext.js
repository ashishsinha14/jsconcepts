//Context vs. Scope
//The first important thing to clear up is that context and scope are not the same. 
//Every function invocation has both a scope and a context associated with it. 
//Fundamentally, scope is function-based while context is object-based. In other words, scope pertains to the variable 
//access of a function when it is invoked and is unique to each invocation. 
//Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code.


//What is “this” Context
//Context is most often determined by how a function is invoked. 
//When a function is called as a method of an object, this is set to the object the method is called on:
//The same principle applies when invoking a function with the new operator to create an instance of an object. 
//When invoked in this manner, the value of this within the scope of the function will be set to the newly created instance:

var Main = function () {
    var that = {};
    var name = 'Main';
    alert(name); //OUTPUT "Main"
    that.sayHi = function () {
        alert(this.name);
    };
    return that;
}

var Test1 = function () {
    var that = Main();
    that.name = 'Test1';
    return that;
}

var Test2 = function () {
    var that = Main();
    that.name = 'Test2';
    return that;
}

var test1 = new Test1();
test1.sayHi(); //OUTPUT "Test1"

var test2 = new Test2();
test2.sayHi(); //OUTPUT "Test2"