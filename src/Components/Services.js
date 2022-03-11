import { Box, Container, Title } from "../Css/global";

import ok from '../Assets/Ok.png'
import Cards from "./Cards";

const Services = () => {
    


    return(
    <Container top={18}>
        <Box row  justify="space-around" className="boxservice">
            <Box>
            <Title bold >Nossos serviços e <br/> especialidades.</Title>
            <Title size={20} opacity top={3} >Tudo com um toque de amor.</Title>

            <Box  top={15}   >
                 <Box row>
                  <img  src={ok} className="imgok"/>
                  <Title  size={20} paddingleft={5} opacity>Seo incluido na entrega.</Title>
                 </Box>
                 
            </Box>

            <Box  top={15}   >
                 <Box row>
                  <img  src={ok} className="imgok"/>
                  <Title  size={20} paddingleft={5} opacity>Otimizado e performatico.</Title>
                 </Box>
                 
            </Box>
            </Box>

            <Box row className="containerboxcard" >
                <Box >

                <Cards icon={'user'}
                title="UI/UX"
                text={'As Melhores esperiencias para o usuario.'}
                />
                </Box>
                <Box left={8}>
                <Cards icon={'front'}
                    title="Front-end"
                    text={'layouts incríveis e 100% customizados.'}
                /> 
                <Cards top={50} icon={'back'}
                    title="Back-end"
                    text={'Toda a logíca por trás do seu site.'}
                />
               
                </Box>

            </Box>
        </Box>
    </Container>
      )

}

export default Services;