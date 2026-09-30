import ServicoPessoa from "../service/Pessoa.js"

class ControllerPessoa {
    Buscar( req, res) {
        try {
            const marcas = ServicoPessoa.Buscar(
                res.send({ message: marcas})
            )
        } catch (e) {
        res.send({ error: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const marcas = ServicoPessoa.BuscarUm(id)
            res.send({ message: marcas })
        } catch (e) {
            res.send({ error: e.message })
        }
    }

    Criar(req, res) {
        try {
            const marca = req.body.marca
            ServicoPessoa.Criar(marca)

            res.send({ message: "A marca " + marca + " foi criada com sucesso!"})
        } catch (e) {
            res.send({ error: e.message })
        }
    }

    Atualizar(req, res) {
        try {
            const id = req.params.id
            const marca = req.body.marca
            ServicoPessoa.Atualizar(id, marca)

            res.send({message: "Marca alterada para " + marca})
        }   catch (e) {
            res.send({ error: e.message})
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            ServicoPessoa.Deletar(id)
            
            res.send({message: "Marca deletada com sucesso"})
        } catch (e) {
            res.send({message: e.message})
        }
    }
}
export default new ControllerPessoa()