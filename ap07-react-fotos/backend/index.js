require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//http://localhost:3000/search?query=cat
app.get('/search', (req, res) => {
  //pegar o valor associado ao parâmetro query
  const query = req.query.query
  //pegar a chave de API (que o back armazena), usando o pacote dotenv
  const chaveAPI = process.env.API_KEY
  console.log(`query: ${query}, chaveAPI: ${chaveAPI}`)
  //criar o objeto da axios
  const pexelsClient = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
      Authorization: chaveAPI
    }
  })
  //disparar a requisição direcionada à pexels usando a axios
  pexelsClient.get('/search', {
    params: {
      query: query
    }
  })
  //tratar o resultado, devolvendo a lista de fotos ao front
  //devolver a coleção de fotos para o front
  
  res.end()
})

const port = 3000
app.listen(port, () => console.log(`Server OK. Porta: ${port}.`))