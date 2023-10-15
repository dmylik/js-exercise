let thisISLet;
// const thisIsConst;
const thisIsConst = 0; //блочные
var thisIsVar; //функциональные
let user = 'John', age = 25, message = 'Hello';

// let thisISLet;
// var thisIsVar;
// const thisIsConst;

{
    let thisISLet;
    let letInBlock = "letInBlock";
    var varInBlock = "varInBlock";
}

// if(1)
//     let letInIf = "letInIf";
// else
//     const constInElse  = 'constInElse';

// console.log(letInIf);

// function block(){
//     var start = "start";
// }

// console.log(start)


// console.log(letInBlock)
// console.log(varInBlock)

// (function() {
//     var IIFE = "Hello";
//     console.log(IIFE); // Hello
// })();
//
// console.log(IIFE); // Hello

{
    let num = 1; //NaN
    var bigint = 10000n;
}

    let str = "string";
    let symbol = Symbol("symbol"); //Map


function booleanValue(){
    let bool = false;
    const Null = null;
    let undef = undefined;
}


const object = {
    name: 'name',
    [symbol]: str,
    str: "idea",
    func: function (){
        str = 'str'
    }
}


console.log(object[symbol])
console.log(typeof booleanValue)

console.log(NaN===NaN)
console.log( bigint.valueOf())



{
    // console.log(num)
    // console.log(bigint)
    // console.log(str)
    // console.log(bool)
    // console.log(Null)
    // console.log(symbol)
    // console.log(object.name)
    // console.log(object.symbol)
    // console.log(object.symbol)
    // console.log(object.func)
    // console.log(object[str])
}








// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number";
typeof Number("1") === "number";
typeof Number("shoe") === "number";

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string";
typeof typeof 1 === "string";
typeof String(1) === "string";

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean";
typeof !!1 === "boolean";

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";



// console.log(new Boolean(false))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

