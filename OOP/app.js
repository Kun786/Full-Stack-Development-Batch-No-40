

function Student(name,age,gender){
    this.Name=name;
    this.Age=age;
    this.Gender=gender;
}

let Faris = new Student('faris',8,'male');
let Ali = new Student('Ali',12);
let Tariq = new Student('Tariq',22);
console.log(Faris,Ali,Tariq);