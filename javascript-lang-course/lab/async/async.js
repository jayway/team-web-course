
var async = {};

(function(exports) {
    'use strict';

    console.log('Write your code inside this');

    function sane() {
        return 'Sane';
    }

    // Calls async tasks in parallel and call the callback with results in an array

    // callback(error, results)
    // if no error, the first parameter should be null
    // if no error, the first parameter is null
    // and the results is an array of results
    function parallel(tasks, callback) {
    }

    // Calls async task serially and call the callback with results in an array
    // callback(error, results)
    // if no error, the first parameter is null
    // and the results is an array of results
    function serial(tasks, callback) {
    }

    // Calls the asyncMapFunction once for each item calls the callback with
    // the results in an array
    // if no error, the first parameter is null
    // and the results is an array of results
    function map(items, asyncMapFunction, callback) {
    }

    exports.sane = sane;
    exports.parallel = parallel;
    exports.serial = serial;
    exports.map = map;

}(async));




