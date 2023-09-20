import './Forms.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


 export const Formulario = (props) => {

   


    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");




    const aoEnviar = (evento) => {
        evento.preventDefauld();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
       
    };




    return (
        <div className="campo-formulario" >
            <form onSubmit={aoEnviar}>
                <div>

                    <h1>Preencha os dados para incluir um funcionário</h1>

                </div>

                <CampoTexto
                    eObrigatorio={true}
                    label='Nome' placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterar={valor => setNome(valor)} />

                <CampoTexto
                    eObrigatorio={true}
                    label='Cargo' placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} />

                <CampoTexto
                    eObrigatorio={true}
                    label='Imagem' placeholder='Digite o endereço da sua imagem'
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)} />

                <ListaSuspensa
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor=>setTime(valor)}/>

                <Botao>
                    Cria Card
                </Botao>

            </form>

        </div>


    )

}

export default Formulario;