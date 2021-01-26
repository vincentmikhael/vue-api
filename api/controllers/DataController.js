module.exports = {
    async create(req,res){
        try{
            const data = await Data.create(req.allParams())
            res.ok({isError: 0,data})

            
            sails.hooks.email.send(
            "testEmail",
            {
                recipientName: req.body.recipient_name,
                senderName: req.body.sender_name,
                message: req.body.message

            },
            {
                to: req.body.recipient_email,
                from: req.body.sender_email,
                subject: "Greeting from " + req.body.sender_name
            },
            function(err) {console.log(err || "Email send!");}
            )


        }catch(err){
            return res.serverError({isError: 1,err});
        }
        
        
    }
}