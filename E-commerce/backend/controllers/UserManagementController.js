//Start Block Dependencies

//Start Block Dependencies


//Start Block Fucntions

const UserTable = (req, res) => {
    try {
        const { TableNumber, TableLimit } = req.body;
        let result = '';

        for(let i=0;i<=TableLimit;i++){
            result += TableNumber+ 'x' +i+ '=' + (TableNumber*i)+' ';
        }
        res.json({
            Table:result,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false
        })
    }
}
//Start Block Fucntions

module.exports = {
    UserTable
}