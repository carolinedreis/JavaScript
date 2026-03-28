const express = require("express");
const app = express();
import { alunos } from './alunos.js';

const PORT = 3015;
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Mensagens: ${res.method}, ${req.url}`);
    next();

    res.status(404).send({
        status: 404,
        error: "Rota não encontrada.",
        url: req.originalUrl
    })
});
app.get("/alunos", (req, res) => {
    res.json({alunos});
});
app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}.`);
});