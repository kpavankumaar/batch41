function gameDetails(name) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(name + " " + restOfName.join(" "));
}
gameDetails("war", "crysis", "GTA");
// this and arrow functions 
// let food = {
//     veg: ['Rice', 'califlower', 'potatoes'],
//     nonveg : ['fish', 'chicken', 'mutton'],
//     makeAChoice: function (){
//         return function(){
//             return { veg: this.veg[0], nonVeg: this.nonveg[2]}
//         }
//     }
// }
// let choiceOfFood = food.makeAChoice();
// let foodMenu = choiceOfFood();
// // Uncaught TypeError: Cannot read property '0' of undefined
// at <anonymous>:7:35
// at <anonymous>:12:16
var food = {
    veg: ['Rice', 'califlower', 'potatoes'],
    nonveg: ['fish', 'chicken', 'mutton'],
    makeAChoice: function () {
        var _this = this;
        console.log(this.veg[0]);
        return function () {
            return { veg: _this.veg[0], nonVeg: _this.nonveg[2] };
        };
    }
};
var choiceOfFood = food.makeAChoice();
var foodMenu = choiceOfFood();
// this type 
var data = 10;
function protected() {
}
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onclick = function (e) {
    };
    return Handler;
}());
var h = new Handler();
var e;
e.addClickListener(h.onclick);
// union types 
// intersection types 
// class
// enums
// generics
// literal types 
var name4 = "srk";
// name4 = 0;
// function createElement(tagName: "img"): HTMLImageElement;
// function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName) {
    return document.createElement(tagName);
}
createElement("input");
// numrical literal types
function rollaDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollaDice();
console.log(result);
var Validationtest;
Validationtest = {
    isValid: false,
    reason: null
};
