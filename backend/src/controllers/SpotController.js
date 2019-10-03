//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res){
        console.log(req.body);
        console.log(req.file);
        return res.json({ ok: true })
    }
};

//__v é o contador de versão do registro, ou seja, ele exibe 
// quantas vezes o registro foi atualizado