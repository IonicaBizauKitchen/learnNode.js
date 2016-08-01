// A                        B
// callback                 high level function
// +---------------------------^ |
//                               |
// ^-------------------call A----+
//
//
//
//                                                   * Pizza for Alice is ready
//             |<------ 1s ------>|                  |
//  Time: |====A==================B==================|==============>
//             *                  *                  ^
//             +--Max(5s)---------|------------------+cb()     * Pizza for Bob is ready
//                                |                            ^
//                                +-------------Max(5s)--------+
//                                                             cb()
//
//function preparePizza(cb) {
//    var time = Math.random() * 5000;
//    setTimeout(function () {
//        cb(time);
//    }, time);
//}
//
//function getPizzaForClient(name) {
//    console.log("Getting pizza for: " + name);
//    // Async call
//    preparePizza(function (t) { // callback
//        console.log("Pizza for " + name + " is ready. Finished in " + t + "ms");
//    });
//}
//
//// 1
//getPizzaForClient("Alice");
//
//// 2
//setTimeout(function() {
//    getPizzaForClient("Bob");
//}, 1000);


function readFile(path, callback) {
    // Open path
    // Read file
    // After reading the file, call the callback
    if (!path) {
        return callback(new Error("Please provide the path. :D"));
    }
    setTimeout(function () {
        //
        callback(null, "Hello World", 42, 41, 40, 7, 3);
        //       ^err  ^content       ...
    }, 1000);
}

//readFile('foo', function (err, content) {
//    console.log(err || content);
//});

readFile('input.txt', function (err, content) {
    console.log(err || content);
});
