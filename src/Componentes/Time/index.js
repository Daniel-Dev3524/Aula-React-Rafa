import Colaborador from '../Colaborador';
import './Time.css'



const Time = (props) => {
    const css = { backgroudColor: props.corDeFundo }
    return (
        props.colaboradores.lenght > 0 ?

            <section className='time' style={css}>

                <h3>{props.nome}</h3>

                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    imagem={colaborador.imagem}
                    cargo={colaborador.cargo}

                />)}





            </section>
            : ''
    )

}

export default Time;