import './CampoTexto.css';


const CampoTexto = (props) => {

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