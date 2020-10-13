interface Sofa{
    color?: string;
    shape?: string;
    quantity: number;
    [key:string]:any;
}
function createFurniture(config: Sofa):{color: string; quantity: number}{
    return {color: "white", quantity: 1}
}
let furniture = createFurniture({quantity: 2, color: "teak", professional: "carperter"});

// function types 
interface SearchFunc{
    (obs:string):string;
}


let search: SearchFunc = function(str:string):string{
    return 'data'
}

search('10');
// array types
interface typeArr{
    [ind:number]: number | string;
}

let arr: typeArr = [10, 20, ""];
arr[0];

interface tArr{
    [index: string]: string;
}

let obj : tArr = {
    name : "ravi"
}


// interface extends interface 

interface Engine {
    name : string;
}

interface Car extends Engine {
    model: string;
}
interface Hyundai {
    [index: number]: Engine
}
let i20 : Hyundai = [{name: '1100cc'}]

// class and interface 

interface Order {
    quantity : number;
}

class WholesaleFurniture implements Order{
    quantity;
    constructor(public data:number){
        this.quantity = data;
    }

}

let obj_1 = new  WholesaleFurniture(20);

class WholeSaleGranites implements Order {
    constructor(public quantity){

    }
    printQuantity() {
        console.log(this.quantity);
    }

}

