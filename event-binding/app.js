let ChangeColor = () => {
    try {
        let SelectTheH1 = document.querySelector('h1');
        SelectTheH1.style.color = 'red'
    } catch (error) {
        console.log(error.message)
    }
}


let MyArray = [1,3,4]

