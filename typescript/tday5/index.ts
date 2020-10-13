// extending interfaces

interface Order {
    quantity : number;

}

interface Products {
    type: string;
}

interface Clothing extends Order, Products{

}
let trousers = {} as Clothing;
trousers.quantity = 10
trousers.type = "Jeans";

// hybrid types 
interface Production{
    (raw : string):string;
    quantity: number;
    recycle():void;
}
function startProduction(): Production{
    let product = function (raw: string){}  as Production;
    product.recycle = function(){

    }
    product.quantity = 10;
    return product;
}

let bag = startProduction();
bag("cloth");
bag.recycle();
bag.quantity = 100;

// interface extending classes 
class Machine {
    private engine:any;
}
interface BuildMachine extends Machine{
    process():void;
}
class MakeACar extends Machine implements BuildMachine {
    process(){}
    // engine= '';
}
class MakeADrone extends Machine{
    process(){}
}
class Robot implements BuildMachine{
    // Class 'Robot' incorrectly implements interface 'BuildMachine'.
    //Type 'Robot' is missing the following properties from type 'BuildMachine': process, enginets(2420)
};

// Rest Parameters 

