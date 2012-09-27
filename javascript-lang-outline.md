Javascript Basics
=================

What is Javascript?
-------------------

### History

### ECMAScript

Values and Primitives
---------------------

### Numbers

Represents both integers and reals. 64 bit representation. 
Integral values range: +/- 9007199254740992

example: var a = 352661;
         var b = 334.22;

Special values:
    NaN
    +Infinity
    -Infinity
         

    test("Strange arithmetic", function() {
        var a = NaN;
        equals( a <  10, false, "bigger than 10");
        equals( a >  10, false, "smaller than 10");
        equals( a === 10, false, "not equal to 10");
        equals( a === NaN, false, "not NaN??? " );
        equals( isNaN( a ), true, "Ahh!!" );
    });


Caveat: some operators only work on 32 bit numbers. A silent conversion 
will be performed by the operator. 

### Strings

example: 
    var txt  = 'Hello World!';
    var txt2 = "I'm happy" + " happy";
         
Sequence of 16 bit elements interpreted as UTF-16. 


Useful operators: 

    split
    txt.split( ' ' );

    substring
    txt.substring( 5 );
    txt.substring( 2, 5 );

    String to number
    parseInt(“1234blue”); //returns 1234
    parseInt(“0xA”); //returns 10
    parseInt(“22.5”); //returns 22
    parseInt(“blue”); //returns NaN
    parseFloat(“1234blue”); //returns 1234.0
    parseFloat(“0xA”); //returns NaN
    parseFloat(“22.5”); //returns 22.5


### Booleans

Two possible values: true or false

    var a = true;
    var b = a && ( a == false );


### undefined and null

Javascript declares both null and undefined which has subtle 
differences. 

Anything unassigned or not declared has the value 'undefined'.

null is a special value meaning "no value". 

equals( "object", typeof null, "type of null is 'object'");

On the other hand, undefined means that the variable has not been declared, or has not been given a value.

equals( 'undefined', typeof i, "no 'i' anywhere yeilds 'undefined' ");
var i;
equals( 'undefined', typeof i, "no assignment to 'i' still gives us 'undefined');


caveat: equals( true, null == undefined, "== consider them equal" );
        equals( false, null === undefined, "BUT === does not" );

### Objects 

An object is a container of keys and values, i.e. a map. 
{ name: 'John', age: function() { return differenceInYears( new Date(1973,3,5), new Date()) } }


### Functions

Javascript is a functional language so a function is a first class citizen 
(unlike Java). 

As in many languages a function is invoked by using parenthesis. 
Example: var tst = function() { return 'hello' }

tst   (a pointer to the function)
tst() (invocation of the function)
equals( 'hello', tst(), 'invoking the function' )


First class citizen means functions can be arguments to functions
and functions can be returned from functions. 

When not used to this "first class citizen" it can make code look a little 
scary at first: _f( 'whack' )()  <= a function called _f invoked with argument
'whack'. Result of that is expected to be a function that subsequently is 
invoked.

Statements
----------

* Declarations
* Conditionals
* Loops
* Exceptions
* Flow statments

Equality and Comparison
-----------------------

In Javascript there are two kinds of comparison operators '==' (equality) and 
'===' (identity). The difference is that '==' will perform type conversion whereas
'===' will not. Performance wise '===' is faster if the types differ, but maybe 
more importantly '==' can produce confusing results:

    equals( false, '' == '0' );
    equals( true, 0 == '' );
    equals( true, 0 == '0' );

    equals( false, false == 'false' );
    equals( true, false == '0' );

    equals( false, false == undefined );
    equals( false, false == null );
    equals( true, null == undefined );

    equals( true, ' \t\r\n ' == 0 );


However, because of lack of type conversion, there can be WTF with '===':

    equals( true, "abc" == new String( "abc" ) );
    equals( false, "abc" === new String( "abc" ) );


The negated operators are called: '!=' and '!==' respectively. 


## Objects

* Object literals
* Properties
* Methods
* Prototypes
* Inheritance


## Arrays

* Array literals
* Properties
* Methods


## JSON

* Javascript Object Notation

## Functions

* Lambda
* Anonymous functions
* First Class Objects
* Methods
* Prototypes
* Scope
* Invocation forms (this)
* Arguments


## Dynamic Compilation

* Eval
* Function


## Modules and Namespaces

* Namespace
* Module
* Mixins
* Dynamic Module


Learning Javascript
===================

* Online resources
* Standard library
* Common pitfalls

Future of Javascript
====================



