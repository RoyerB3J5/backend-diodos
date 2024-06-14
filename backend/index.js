import express from 'express';
import { PORT,MONGO_URL, FRONTEND_URL } from './config.js';
import cors from 'cors';
import mongoose from 'mongoose';
import { Rectificador, Zener, Schottky, Led } from './models/diodo.models.js';


const app = express();
app.use(express.json())
app.use(cors(
  {
    origin:FRONTEND_URL,
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
  }
))
const models = {
  rectificador : Rectificador,
  zener : Zener,
  schottky: Schottky,
  led:Led
}

app.get('/1234-unt/', async (req,res) =>{
  let allData = {}
  try{
    for (const modelName in models){
      const Model = models[modelName]
      const item = await Model.find()
      allData[modelName] = item
    }
    return res.status(200).json(allData)
  } catch(error){
    console.log(error.message);
    return res.status(500).send({message:error.message})
  }
})


app.get('/1234-unt/:tipo', async (req,res) =>{
  const { tipo } = req.params
  const Model = models[tipo]

  if(!Model){
    return res.status(404).send({message:"Tipo de diodo no encontrado"})
  }
  try {
    const items = await Model.find()
    return res.status(200).json(items)
  }catch (error){
    console.log(error.message)
    return res.status(500).send({message:error.message})
  }
})


app.get('/1234-unt/:tipo/:cod',async (req,res)=>{
  const {tipo,cod} = req.params
  const Model = models[tipo]

  try{
    const item = await Model.findOne({codigo: cod})
    if(item) {
      return res.status(200).json(item)
    } else {
      return res.status(404).send({message:"Diodo no encontrado"})
    }
    
  } catch(error){
    console.log(error.message)
    return res.status(500).send({message:error.message})
  }
})

app.post('/1234-unt/:tipo', async (req,res)=>{
  const {tipo} = req.params
  const Model = models[tipo]

  try{
    const newDiodo = await Model.create(req.body)
    return res.status(201).json(newDiodo)
  }catch (error){
    console.log(error.message)
    return res.status(500).send({message:error.message})
  }
})



mongoose.connect(MONGO_URL).
  then(()=>{
    console.log('App connected to database')
    app.listen(PORT,()=>{
      console.log(`App is running on port ${PORT}`)
    })
  }). catch((error)=>{
    console.log(error.message)
  })
