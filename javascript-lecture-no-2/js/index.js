//Arguments are not avaialble in arrow function

// function add(x,y){
//     console.log(arguments);
//     return (x+y);
// }




// let Result = function addNumber(num1, num2){
//     let result;
//     result = num1 + num2;
//     return result;
// }


// let addNumber = (num1, num2) => {
//     let result;
//     result = num1 + num2;
//     return result
// }
// console.log(addNumber(2,4));

// (num1, num2) => (num1+num2)
// console.log(addNumber(4,6));

// Square A Number

// let SquareANumber = (num) => {
//     return num*num;
// }

// console.log(SquareANumber(9));


// let TimesTable = (KisKaTable, KahanTak) => {
//     for(
//         let x=1;
//         x<=KahanTak;
//         x++
//         ){
//         console.log(`${KisKaTable} * ${x} = ${KisKaTable*x}`)
//     }
// }

// TimesTable(2,12);




let MeraTable = (Upper, Lower) => {
    for(
        let a=100;
        a>=Lower;
        a--){
            console.log(`${Lower} - ${a} = ${Upper-a}`);
        }
        
}

MeraTable(10,1);