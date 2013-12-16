describe('Functional', function() {
    "use strict";

    // 1. Implement the method remove(array, el) in functional.js
    // Hint: this.splice(i, 1) removes element at i.
    describe("#remove", function() {
        it('removes the first element from the array', function() {
            expect(functional.remove(["a", "b", "c", "d"], "a")).to.deep.equal(["b", "c", "d"]);
        });
        it('removes a middle element from the array', function() {
            expect(functional.remove(["a", "b", "c", "d"], 'c')).to.deep.equal(["a", "b", "d"]);
        });
        it('removes the last element from the array', function() {
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

    // Partial applies arguments to a function and returns a new function
    // The new function can then be called again with additional arguments
    // and the first arguments are already set.
    // Add the method partial to the Function.prototype
    describe("Function.prototype.partial", function() {
        // Helper function that adds all its arguments together
        function sum(){
            for(var s = 0, i = arguments.length; i > 0;s += arguments[--i]);
            return s;
        }

        it('is a function', function() {
            expect(Function.prototype.partial).to.not.be.undefined;
            expect(Function.prototype.partial).to.be.a('function');
        });

        it('creates a new function which can add', function() {
            var addThree = sum.partial(3);
            expect(addThree).to.be.a('function');
            expect(addThree(4)).to.equal(7);
            expect(addThree(8)).to.equal(11);
        });

        it('creates a new function which can be partial', function() {
            var addThree = sum.partial(3);
            var addSeven = addThree.partial(4);
            expect(addSeven).to.be.a('function');
            expect(addSeven(7)).to.equal(14);
            expect(addSeven(-7, 8, 9)).to.equal(17);
        });
    });

});

