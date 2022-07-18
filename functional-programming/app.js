const MyArray = [
    {
        Name:'A',
        Age:20
    },
    {
        Name:'A',
        Age:20
    },
    {
        Name:'B',
        Age:25
    },
    {
        Name:'C',
        Age:30
    },
    {
        Name:'D',
        Age:35
    },
    {
        Name:'E',
        Age:18
    },
    {
        Name:'E',
        Age:18
    },{
        Name:'E',
        Age:18
    },
];

let MyNumberArray = [1,2,3,4,5,6]
// Array Methods
// MyArray.push({Name:'NewObject',Number:10,Age:99})
// let MyArrayInString = MyNumberArray.toString();
console.log(MyNumberArray.toString().replace(/,/g,'+'));


// let FilterOnTheBaseOfAge = (HumanArray) => {
//     HumanArray.forEach((element, index) => {
//         // console.log(element)
//         if(element.Age >= 35){
//           HumanArray.splice(index,0,{Name:"NayaPakistan",Age:75})
//         }
//     });
//     return HumanArray;
// }

// let newValue  = FilterOnTheBaseOfAge(MyArray);
// console.log(newValue);

// let NumberArray = [1,2,3,4,5,6];
// NumberArray.splice(1,1,-3,-4);
// console.log(NumberArray);