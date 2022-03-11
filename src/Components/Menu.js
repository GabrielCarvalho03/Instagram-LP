import { Box, Container, Title } from "../Css/global";
import icon from '../Assets/icon.svg'






const Menu = () => {

    const loadingcontacts = () =>{
        window.location.href='/process2'
      }
    return(
     <Box className="container-menu" >
         <Container height={80} row justify="space-between" align="center" >
             <Box cursor onClick={()=>{
                 window.scroll(0, 0)
             }}>
                 <img src={icon} height="60" width="60"/>
             </Box>

             <Box  row>
                 <Title cursor bold size={16} >Inicio</Title>
                
                 <Title cursor bold size={16}  paddingleft={5} >Sobre</Title>
                 <Title cursor bold size={16}  paddingleft={5} >Serviços</Title>
                 <Title cursor bold size={16}  paddingleft={5} >Time</Title>
                 <Title cursor bold size={16}  paddingleft={5} >Depoimentos</Title>
                 <Box  onClick={loadingcontacts} cursor left={5} className="btnmenu" row justify="center" align="center" >
                 <Title color="white" size={20}  paddingleft={5}   >Entrar em Contato</Title>
                 </Box>
             </Box>
              
         </Container>
     </Box>
    )
}

export default Menu;