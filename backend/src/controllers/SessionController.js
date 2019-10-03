//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;
        //return res.json({ message: 'Hello World'})
        let user = await User.findOne({ email });
        if(!user){
            user = await User.create({ email })
        }
        

        return res.json(user);
    }
};

//__v é o contador de versão do registro, ou seja, ele exibe 
// quantas vezes o registro foi atualizado