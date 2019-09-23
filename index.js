function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: "Joãozinho da Silva",
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {

    setTimeout(() => {
        return callback(null, {
            telefone: "94454-5564",
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "Rua tijuquinha",
            number: 2230
        })
    }, 2000);
}

obterUsuario(function resolveUsuario(error, usuario) {
    if (error)
        console.log('Deu ruim na consulta do usuario!!', error);
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1)
            console.log('Deu ruim na hora de consultar o telefone!!', error1);

        obterEndereco(usuario.id, function reosolveEndereco(error2, endereço) {
            if (error1)
                console.log('Deu ruim na hora de consultar o endereço!!', error2);

            console.log(`
        Nome: ${usuario.name},
        ID: ${usuario.id},
        Telefone: (${telefone.ddd})${telefone.telefone}
        Endereço: ${endereço.rua}, ${endereço.number}
        `)
        })
    });
});