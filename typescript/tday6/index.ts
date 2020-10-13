function gameDetails ( name: string, ...restOfName: string[]){
    console.log(name + " "+ restOfName.join(" "));
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
let food = {
    veg: ['Rice', 'califlower', 'potatoes'],
    nonveg : ['fish', 'chicken', 'mutton'],
    makeAChoice: function (){
        console.log(this.veg[0]);
        return () => {
            return { veg: this.veg[0], nonVeg: this.nonveg[2]}
        }
    }
}
let choiceOfFood = food.makeAChoice();
let foodMenu = choiceOfFood();

// this type 
var data = 10;
function protected(this: void){
    
}


// this parameters in callbacks 
interface UIElement{
    addClickListener(onclick: (this:void, e: Event) => void):void ;
}

class Handler {
    onclick(this: void, e: Event){

    }

}
let h = new Handler();
let e : UIElement;
e.addClickListener(h.onclick);
// union types 
// intersection types 
// class
// enums
// generics

// literal types 

let name4 = "srk";
// name4 = 0;
// function createElement(tagName: "img"): HTMLImageElement;
// function createElement(tagName: "input"): HTMLInputElement;

function createElement(tagName: string): Element {
    return document.createElement(tagName);
    
}
createElement("input");
// numrical literal types
function rollaDice():1 {
    return (Math.floor(Math.random() * 6)+1) as 1 ;
}
const result = rollaDice();
console.log(result);

interface engine {
    make: "ms"
    capacity: number
}

interface ValidationSuccess {
    isValid: true;
    reason: number
}
interface ValidationFailure {
    isValid: false;
    reason : string;
}

type ValidationResult = ValidationFailure | ValidationSuccess;
let Validationtest: ValidationFailure | ValidationSuccess;

Validationtest = {
    isValid: true,
    reason: "10"
}
// unions and intersection types 
function sum (num1: number, num2: number | string){

}
sum(10, 10) ;

interface leapord{
    fastest(): void;
    mammal(): void;
    livingBeing():void
}

interface crocodile{
    crawl(): void;
    layEggs(): void;
    livingBeing():void
}

declare function wildAnimals(): leapord | crocodile;

let animal1 = wildAnimals();
animal1.layEggs();
animal1.livingBeing();

function animal1Def() : leapord | crocodile{
    return {
        fastest: ():void => {},
        mammal: ():void => {},
        livingBeing: function(){}
    }

}
let obj = animal1Def();
obj.livingBeing();
obj.fastest();

//pramilkprince@rediffmail.com