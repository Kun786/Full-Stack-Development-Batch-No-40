// let Human = {};

// Human.name = "John";
// Human.surname = "smith";
// Human.address = {
//     street:"123 xyz",
//     city:"London",
//     country:"UnitedK"
// };
// Human.age = 28;
// delete Human.age;
let Human = {
    showFullName(){
        return "John Smith"
    },
    Age:()=>{
        return 8
    }
}

Human.City = () =>{
    return 'Lahore'
}
console.log(Human.City())


