import { Box, Container, Title } from "../Css/global";

import logoon from '../Assets/logoon.svg'
import Facebook from '../Assets/Facebook.png'
import Instagram from '../Assets/Instagram.png'
import LinkedIn from '../Assets/LinkedIn.png'

const Footer =()=> {
 return (
  <Box  top={10} color="gray" height={600}>
      <Container>
          <Box paddingTop={5}>
             <img src={logoon} className="logoFooter" />
          </Box>


          <Box paddingTop={10} row justify="space-between"  className="boxtextFooter">
              <Box>
                  <Title size={25} color="white"> Av Antônio perereia 222</Title>
                  <Title top={8} size={25} color="white"> (11) 9 9999- 9999</Title>
                  <Title top={8}  size={25} color="white"> subtletouch@gmail.com</Title>
                  <Box color="white" height={0.5}></Box>
              </Box>
              <Box right={20}top={-10} row justify="space-around"  className="boxiconFooter" >
                  <Box right={40}>

                <img src={Facebook} />
                  </Box>
                <Box  right={40}>

                <img  src={Instagram}  />
                </Box>
                <Box  right={40}>
                <img src={LinkedIn} />

                </Box>
              </Box>
             
          </Box>
          

          <Box top={10}color="white" height={1}></Box>
          <Box>
          <Title top={3}  size={15} color="white"> @ copyrigth 2022 subtletouch. Todos os direitos reservados</Title>
          </Box>
      </Container>
  </Box>
  );
}

export default Footer;