const allMessages = [];

module.exports = {
    getAllMessages: (req, res) => {
        res.status(200).send(allMessages);
    },
    createMessage: (req, res) => {
        //const { username, message} = req.body;
        //allMessages.push(username,message);
        let newMessage = {
            username: req.body.username,
            message: req.body.message
        }
        allMessages.push(newMessage);
        res.status(200).send(allMessages)
    }
}