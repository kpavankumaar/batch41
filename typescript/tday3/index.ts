interface CarModel{
    model: string;
    brand?: string;
    readonly country?: string;
    // details?: function(string,string ): string;
    function details(name: string,model : string):string;
}
function car(val: CarModel): {model: string}{
    console.log(val.model);
    return {model: 'v3'};
}
car({ model: 'Tesla3', brand: 'Tesla'});

let truck: CarModel = { model : 'jeep', country: 'USA'};
truck.details = function(name, model){
    return ''
}
truck.details(10,20)
truck.country = 'china';
truck.model = '';

let friends: string [] = ['sneha', 'srk', 'ravi', 'rajesh'];
let bookTkts: ReadonlyArray<string> = friends;

// bookTkts[0] = ''
// bookTkts.push()

friends = bookTkts as string[];
bookTkts.length = 20;

const obj = {
    readonly add : 10
}

obj.add = 11;
obj = {}

let sample: CarModel = {
    model:''
}


