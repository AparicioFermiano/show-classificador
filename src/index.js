const express = require('express')
const app = express()
const port = 4000

const idadePrioritaria = 60;

const funcoes = {
  ClienteCriado: (cliente) => {
    cliente.status =
      cliente.idade >= idadePrioritaria ? "Prioritario" : "Comum";
    axios.post("http://localhost:10000/eventos"),
      {
        tipo: "ClienteCriado",
        dados: cliente,
      };
  },
};

app.post("/eventos", (req, res) => {
  funcoes[req.body.tipo](req.body.dados);
  res.status(200).send({ msg: "ok" });
});

app.post("/eventos", (req, res) => {});

app.listen(port, () => console.log("classificacao, Porta 4000"));

