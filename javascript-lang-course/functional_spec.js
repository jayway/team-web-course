describe('Functional', function() {
    "use strict";
    
    // 1. Implement the method remove(array, el) in functional.js
    // Hint: this.splice(i, 1) removes element at i.
    describe("#remove", function() {
        it('removes the element from the array and returns a new array', function() {
            expect(functional.remove(["a", "b", "c", "d"], "a")).to.deep.equal(["b", "c", "d"]);
            expect(functional.remove(["a", "b", "c", "d"], 'c')).to.deep.equal(["a", "b", "d"]);
            expect(functional.remove(["a", "b", "c", "d"], 'd')).to.deep.equal(["a", "b", "c"]);
        });
    });


    // 2. Add the method mixin(mixee, mixin) to functional.js 
    // The method should add all properties of the mixin to the
    // mixee object, EXCEPT the ones starting with _.
    // Hint: for (var key in mixin)
    describe("#mixin", function() {
        var mixee;
        beforeEach(function() {
            var mixin = {
                tapir: "I'm in!",
                aardvark: function() { return 'I should be in too!';},
                _platypus: 'I should be excluded'
            };
            mixee = {};
            functional.mixin(mixee, mixin);
        });
        it('has property tapir', function() {
            expect(mixee).to.have.property('tapir');
        });
        it('has function aardvark', function() {
            expect(mixee.aardvark()).to.equal('I should be in too!');
        });
        it('does not have property platypus', function() {
            expect(mixee).to.not.have.property('_platypus');
        });
    });


    // 3. Add the function convert to functional.js
    // Convert applies a function to every element of an array
    // and returns the results as a new array.
    // The function is then mixed into array prototype.
    describe('#convert', function() {
        it('applies toUpperCase to each element and returns the array', function() {
            var toUpperCase = function(s) {return s.toUpperCase();};
            expect(functional.convert(["one", "two", "three"], toUpperCase)).to.deep.equal(["ONE", "TWO", "THREE"]);
        });
        it('applies function length to  each element and returns the array', function() {
            var length = function(s) {return s.length;};
            expect(functional.convert(["one", "two", "three"], length)).to.deep.equal([3, 3, 5]);
        });
    });

    // Add the method curry to the Function.prototype
    // Curry is the same as partial application.
    // If not all elements of the function are given a new function is returned.
    // The new function can then be called again with additional arguments
    // while the first argument are already set.
    describe("Function.prototype.curry", function() {
        it('', function() {
            expect(Function.prototype.curry).to.not.be.undefined;
            expect(Function.prototype.curry).to.be.a('function');
            function sum(){
                for(var s = 0, i = arguments.length; i > 0;s += arguments[--i]);
                return s;
            }
            var addThree = sum.curry(3);
            expect(addThree).to.be.a('function');
            expect(addThree(4)).to.equal(7);
            expect(addThree(8)).to.equal(11);

            var addSeven = addThree.curry(4);
            expect(addSeven).to.be.a('function');
            expect(addSeven(7)).to.equal(14);
            expect(addSeven(-7)).to.equal(0);
        });
    });

});

