let GetInputValue = () => {
    try {
        let Message = '';
        let DivWhereIWantToShowMyMessage = document.querySelector('.ShowMessage');
        let MyInputField = document.querySelector('#exampleInputEmail1');
        let MyInputValue = document.querySelector('#exampleInputEmail1').value;
        let RadioBoxValue = document.querySelector('.HelloCheckBox:checked').value;
        let CheckBoxValue = document.querySelector('.Check1').value;
        let DateValue =  document.querySelector('.MyDate').value;
        console.log(DateValue);
        if(MyInputValue === 'yes'){

            MyInputField.style.border = "1px solid green";
            Message = 'Approved';
            DivWhereIWantToShowMyMessage.innerHTML=Message;

        }else{
            MyInputField.style.border = "1px solid red";
            Message = 'Rejected';
            DivWhereIWantToShowMyMessage.innerHTML=Message;
        }
    } catch (error) {
        alert(error);
        console.log(error)
    }
}


let GetSeveValue = () => {
    try {
        let SevenValue = parseInt(document.querySelector('.seven').dataset.seven);
        let newValue = SevenValue.toString();
        console.log(newValue,typeof(newValue));
        console.log(typeof(SevenValue));
        
        console.log(SevenValue)
    } catch (error) {
        alert(error.message);
    }
}


let Calc = () =>{
    try {
        let SevenValue = parseInt(document.querySelector('.seven').dataset.seven);
        
    } catch (error) {
        
    }
}