import express from "express"
import ControllerPessoa from "../controller/Pessoa.js"

const router = express.Router();

router.get("/buscar", ControllerPessoa.buscar)
router.get("/buscarUm/:id", ControllerPessoa.buscarUm)
router.post("/criar", ControllerPessoa.criar)
router.put("/atualizar/:id", ControllerPessoa.atualizar)
router.delete("/deletar/:id", ControllerPessoa.deletar)

export default router 