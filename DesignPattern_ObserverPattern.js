var Subject = function () {
    var observers = [];

    var subscribeObserver = function (observer) {
        observers.push(observer);
    };

    var unsubscribeObserver = function (observer) {
        var index = observers.indexOf(observer);
        if (index > -1) {
            observers.splice(index, 1);
        }
    };

    var notifyObserver = function (observer) {
        var index = observers.indexOf(observer);
        if (index > -1) {
            observers[index].notify(index);
        }
    };

    var notifyAllObserver = function () {
        for (var i = 0; i < observers.length ; i++) {
            observers[i].notify(i);
        }
    };

    return {
        subscribeObserver: subscribeObserver,
        unsubscribeObserver: unsubscribeObserver,
        notifyObserver: notifyObserver,
        notifyAllObserver: notifyAllObserver
    }
}

var Observer = function () {
    var notify = function (index) {
        console.log("Observer " + index + "is Notified.")
    };
    return {
        notify: notify
    }
}


var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObserver();



