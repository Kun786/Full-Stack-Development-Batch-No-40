// function Car(name,cc,color,price,model){

//     this.Name = name;
//     this.EngineCC = cc;
//     this.Color = color;
//     this.Price =  price;
//     this.Model = model;

//     this.callMyColor = function () {
//         return (`My color is ${this.Color}`);
//     }
// }

class Car {

    constructor(name, cc, color, price, model) {
        this.Name = name;
        this.EngineCC = cc;
        this.Color = color;
        this.Price = price;
        this.Model = model;
        this.CallMyName= function(){
            return (`My color is ${this.Color}`);
        } 
    }

    
}


let Mahindra = new Car('L700', '2000', 'Orange', '12 INR', '2022');
console.log(Mahindra);
console.log(Mahindra.CallMyName());



