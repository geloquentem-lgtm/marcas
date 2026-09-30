const marcas = new Array ("Nike","Adidas","Puma","Vans")

class pessoa {
    Buscar() {
        return marcas
    }

    BuscarUm(id) {
        return marcas[id]
    }

    Criar(marca) {
        marcas.push(marca)
    }

    Atualizar(id, marca) {
        marcas[id] = marca
    }

    Deletar(id) {
        marcas.splice(id, 1)
    }
}

export default new pessoa()