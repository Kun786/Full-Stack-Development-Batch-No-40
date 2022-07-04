// let Areeb = {
//     Name:'Areeb',
//     Age:15
// }

// let Areeb = {
//     Name:'Areeb',
//     Age:15
// }
// let Areeb = {
//     Name:'Areeb',
//     Age:15
// }
// let Areeb = {
//     Name:'Areeb',
//     Age:15
// }
// let Areeb = {
//     Name:'Areeb',
//     Age:15
// }
// let Areeb = {
//     Name:'Areeb',
//     Age:15
// }

// let Human = {
//     Name:String,
//     Age:Number,
//     Religion:String,

//     CanSpeak:()=>{

//     },

//     CanEat: () =>{

//     }
// }

// let Areeb = new Human({
//     Name:'Areeb',
//     Age:this.Age
// })

let ChangeheadingColor = () => {
    try {
    //    let MyHEading =  document.querySelectorAll('h1');
    //    MyHEading.forEach((element) => {
    //     element.style.color = "red";
    //    element.style.border = "1px solid red";
    //    });
        let Myheading = document.querySelector('.ToShowMyContent');
        Myheading.innerHTML="jkdahsjhdhkjashdjakh"
    } catch (error) {
        alert(error.message)
    }
}

let CreateList = () => {
    try {
        let MyList = document.querySelector('.List');
        let Ul = document.createElement('ul');
        let li = document.createElement('li');
        let ListData = document.createTextNode(`${INputValue}`);
        Ul.appendChild(li);
        li.appendChild(ListData);
        MyList.appendChild(Ul);

    } catch (error) {
        alert(error.message)
    }
}