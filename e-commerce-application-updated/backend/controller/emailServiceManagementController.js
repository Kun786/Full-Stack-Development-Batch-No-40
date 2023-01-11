const { sendEmail } =  require('../miscellaneous/SendEmail');

const sendEmailAgent = async(req, res) => {
    try {
        let payLoad =  req.body;
        const emailResponse = await sendEmail(payLoad);
        res.json({
            message:emailResponse
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            result:null
        })
    }
}


module.exports = {
    sendEmailAgent
}