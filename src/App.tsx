
import './App.css'
import Heading from './Heading';


export interface TopPage{
  firstline:string,phoneNumber:number
}

export interface Trainer{
  trainerName:string;tagName:string;fees?:number
}


export interface TrainerType{
  trainer:Trainer
}


function App() {

  const primaryTrainer:Trainer ={trainerName:'Sundar',tagName:'Mr.Chennai'}

   return (
    <>
  <Heading firstline={'27/7 fitness studio'} phoneNumber={98989232323}></Heading>
  
    </>
  )
}

export default App
