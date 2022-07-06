let GetValues = () => {
    try {
        console.log('hi')
        var params = '';
        let form = document.querySelector('#MyForm');
        for (var i = 0; i < form.length; i++) {
            var fieldName = form.elements[i].name;
            var fieldValue = form.elements[i].value;
            console.log(fieldName,fieldValue)
            // use the fields, put them in a array, etc.

            // or, add them to a key-value pair strings, 
            // as in regular POST

            // params += fieldName + '=' + fieldValue + '&';
        }

    } catch (error) {

    }
}