import './Forms.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        "Pedagógico",
        "Administrador",
        "Cordenação",
        "Discentes"
    ]


    return (

        

        <div className="campo-formulario" >

            

            

            <form>   
            <h1>Preencha os dados para incluir um funcionário</h1>             

                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da sua imagem' />
                <ListaSuspensa itens = {times}/>
                <Botao/>

            </form>

        </div>


    )

}

export default Formulario;