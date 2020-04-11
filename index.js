import React,{useState} from 'react';
import { render } from 'react-dom';

//creacion de boton con estado
const Button = ()=>{
  const [counter,setCounter] = useState(0);
  return (
      <div> 
        <p>Presionado: {counter} </p>
        <button onClick={
          ()=> setCounter(counter + 1)
          }> Click me!</button>

      </div>
  )

}

function SaludarEnIdiomas({idioma}){
  if(idioma==="es")return <p>Hola</p>
  if(idioma==="en")return <p>Hello</p>
}
const Saludo= () =>{
 const nombre = 'Carlos';
 const idioma = 'en';

    if(idioma ==="es"){
     return <p>Hola</p>    
    }
  else{
   return <p>hello</p> 
  }
  
/*
  return <p> <SaludarEnIdiomas idioma="es" /> 
  { `${nombre}` }</p>

*/

}
//declaracion con uppercase-- lower case son metodos de react
const EmitirSaludo=({nombre, idioma='es'})=>{
console.log(idioma);
const saludo = idioma ==='es' ? 'Hola' : 'Hello';

return <p> {saludo} {nombre}</p>
}


const minombre = 'Charles';
const nombres =['Carlos','Nanda','Cirilo']

  function getNombres(){
    const elementosLista=[];
      for(var i = 0; i< nombres.length;i++){
        elementosLista.push(<li>{nombres[i]}</li>)
      }
    return elementosLista
  }

const Nombres = ()=>{
  return  <ul>
   {
     nombres.map( (nombre, index )=> <li key = {index}>{nombre}</li>)
     } </ul>
  //return < ul> {getNombres() }</ul>
}
const App = () =>{
  return <div> <Nombres/> 
  <EmitirSaludo nombre= "Charlie"  /> <Button/> </div>

  
}
render(<App/>, document.getElementById('root'));