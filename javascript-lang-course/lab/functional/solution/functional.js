"use strict";
var functional = {


    //1. Removes the element from the array and return the result
    remove: function(array, item) {
        for (var i = 0; i < array.length; i++)
            if (item === array[i])  array.splice(i, 1);
        return array;
    },

    // 2. The mixin method should add all properties of the mixin to the
    // mixee object, EXCEPT the ones starting with _.
    // Hint: for (var key in mixin)
    mixin: function(mixee, mixin) {
      for (var name in mixin) {
          if (name.charAt(0) != '_')
            (mixee[name] = mixin[name]);
      }
    },

    // 3. Convert applies a function to every element of an array
    // and returns the results as a new array.
    // The function is then mixed into array prototype.
    convert: function(array, conversionFunction) {
        var newArr = [];
        for (var i=0; i < array.length; i++) {
            newArr.push(conversionFunction(array[i]));
        }
        return newArr;
    }
};

// 4. Partial applies arguments to a function and returns a new function
// The new function can then be called again with additional arguments
// and the first arguments are already set.
//
// Add the method partial to the Function.prototype
Function.prototype.partial = function() {
    var slice = Array.prototype.slice;
    var fn = this;
    var args = slice.apply(arguments);
    return function() {
        return fn.apply(null, args.concat(slice.apply(arguments)));
    };
};


