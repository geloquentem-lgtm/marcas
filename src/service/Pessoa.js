import ControllerPessoa from "../controller/Pessoa.js"

class pessoa {

    Buscar() {
        return ControllerPessoa.buscar()
    }

    BuscarUm(id) {
        if (isNaN(id)) {
            throw new Error("Id invalido")
        }
        return ControllerPessoa.BuscarUm(id)
    }

    Criar(marca) {
        if (!marca) {
            throw new Error("Marca invalida")
        }
        return ControllerPessoa.Criar(marca)
    }

    Atualizar(id, marca) {
        if (isNaN(id)) {
            throw new Error("Id invalida")
        }
        if (!marca) {
            throw new Error("Marca invalida")
        }
        ControllerPessoa.Atualizar(marca)
    }

    Deletar(id) {
        if (isNaN(id)) {
            throw new Error("Marca invalida")
        }
        ControllerPessoa.Deletar(id)
        }
}
export default new ServicoPessoa()