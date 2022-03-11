import { Title, Box, Container } from "../Css/global";
import eletronics from '../Assets/Electronics.svg'
import rocket from '../Assets/rocket.svg'
import medal from '../Assets/medal.svg'



const Diferentials = () => {
    return(

        <Container top={8} className="containerdiferentials">
            <Box left={6} row className="boxdiferentials">
                <Box className="boxdescription" >


                    
                <Box left={15} >

            <img  src={eletronics} className="icondescription"   />
                </Box  >
                    <Title top={5} size={20} bold>Processo de Desenvolvimento </Title>
                    <Title width={55}  top={5} opacity size={18} >Usamos a melhor estrutura para os nossos processos de densenvolvimento , sendo algumas delas : mobile frist e designer responsivo . </Title>
                    
                </Box>
                <Box left={-20} top={-4} className="boxdescription ">
                    <Box left={15} >

                    <img  src={rocket} className="icondescription" />
                        </Box>
                    <Title  size={20}   top={5} bold>Melhores Tecnologias </Title>
                    <Title width={90}  top={5} opacity size={18} > Temos acesso as melhores tecnologia do mercado como o Reactjs e React Native.</Title>
                </Box>
                <Box  top={-4}  className="boxdescription medal">
                    <Box left={30} >

                <img  src={medal} className="icondescriptionMedal" />
                    </Box>
                    <Title size={20} top={5} bold>Processo de Desenvolvimento </Title>
                    <Title width={90}  top={5} opacity size={18} > Trabalhamos de forma rápida e objetiva para entregar no menor tempo . </Title>
                </Box>

            </Box>
        </Container>
     
    )
}

export default Diferentials;