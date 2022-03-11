import { Container, Title, Box } from "../Css/global";
import heart from '../Assets/heart.svg'






const Rel = () => {
    return(
     <Container top={15}>
       <Box  row className="boxrel" >
      <Box className="boxtextrel">
        <Title bold>Empresa Referencia em mercado web e mobile.</Title>
        <Title opacity  top={5} size={25}>  A subtle touch é uma empresa com foco em você. Fazemos a ponte entre o seu sonho e sua realizade e usamos a tecnologia para atravessar essa ponte. aqui trabalhamos com muita emoção para conectar você ao seu sonho. </Title>
      </Box>
      <Box left={10}>

      <img src={heart} className='imgheart'/>
      </Box>
       </Box>
     </Container>
    )
}

export default Rel;