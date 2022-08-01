// let Student = {
//     Kye:value
// }




function Student(name){
    this.Name=name;
    this.CallMyName = ()=>{
        return `MyName is ${this.Name}`
    }
}


let Student1 = new Student('Ali');
let Student2 = new Student('Ahmed');


// Student.prototype.CallMyName = function(){
//     return `MyName is ${this.Name}`
// }

console.log(Student1.CallMyName());


localStorage.setItem('dachi',JSON.stringify(data))
JSON.parse(localStorage.getItem('dachi'))