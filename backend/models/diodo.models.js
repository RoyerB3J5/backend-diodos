import { Double } from 'mongodb';
import mongoose, { Document, version } from 'mongoose';  

const rectificadorSchema = mongoose.Schema({
  codigo:{
    type:String,
    required:true,
  },
  funcion:{
    type:String,
    required:true,
  },
  corriente_max:{
    type:Number,
    required:true,
  },
  v_inversa:{
    type:Number,
    required:true,
  },
  v_directa:{
    type:Number,
    required:true,
  }
},
{
  versionKey:false
})

const zenerSchema = mongoose.Schema({
  codigo:{
    type:String,
    required:true,
  },
  funcion:{
    type:String,
    required:true,
  },
  v_zener:{
    type:Number,
    required:true,
  },
  c_zener:{
    type:Number,
    required:true,
  },
  potencia:{
    type:Number,
    required:true,
  }
},
{
  versionKey:false
})
const schottkySchema = mongoose.Schema({
  codigo:{
    type:String,
    required:true,
  },
  funcion:{
    type:String,
    required:true,
  },
  corriente_max:{
    type:Number,
    required:true,
  },
  v_inversa:{
    type:Number,
    required:true,
  },
  v_directa:{
    type:Number,
    required:true,
  },
  corriente_dir:{
    type:Number,
    required:true,
  
  },
  corriente_fug:{
    type:Number,
    required:true
  }
},
{
  versionKey:false
})

const ledSchema = mongoose.Schema({
  codigo:{
    type:String,
    required:true,
  },
  capsula:{
    type:String,
    required:true,
  },
  color:{
    type:String,
    required:true,
  },
  intensidad_lum:{
    type:Number,
    required:true,
  },
  corriente_al:{
    type:Number,
    required:true,
  
  },
  tension_al:{
    type:String,
    required:true
  },
  diametro:{
    type: Number,
    required:true
  }
},
{
  versionKey:false
})

export const Rectificador = mongoose.model('Rectificador',rectificadorSchema)
export const Zener = mongoose.model('Zener', zenerSchema)
export const Schottky = mongoose.model('Schottky',schottkySchema )
export const Led = mongoose.model('Led', ledSchema)