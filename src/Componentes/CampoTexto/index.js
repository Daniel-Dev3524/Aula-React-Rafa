import './CampoTexto.css';
import {useState}from 'react';


const CampoTexto = (props) => {
    console.log(props);

    //let valor = "XPTO"


    const [valor,setValor]= useState("XPTO")


    const aodigitar = (evento) => {
        props.aoAlterar(evento.target.value)
       


    }

    return (
        <div className="campo-texto">


            <label>{props.label}</label>


            <input
                value={props.valor}//nome,cargo,imagem
                onChange={aodigitar}
                required={props.eObrigatorio}
                placeholder={props.placeholder} />






        </div>

    )
}
export default CampoTexto;