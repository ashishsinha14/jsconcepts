var Main = function () {
    var that = {};
    var name = 'Main';
    alert(name);
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
test1.sayHi();

var test2 = new Test2();
test2.sayHi();


