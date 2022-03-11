import { Title, Box, Container } from "../Css/global";

import Intro from './Intro'

import imgHeader1 from '../Assets/imgHeader1.svg'
import imgheadermobile from '../Assets/imgheadermobile.svg'
import iconrow from '../Assets/iconrow.svg'


const Header = () => {
    const loadingcontacts = () =>{
        window.location.href='/process2'
      }

    
    return(
       <Box  className="header" >
           <Container>

           <Box row className="boxheader" >
                <Box left={13}  top={13}  className="boxtext">
                    <Title width={80}  size={35} > Criando pontes através da Tecnologia</Title>
                    <Box onClick={loadingcontacts} className="btnheader" top={8}>
                        <Title color="white" size={22}>Entrar em contato</Title>
                        <img  src={iconrow}  className="imgrow"  />
                    </Box>

                </Box>


                <Box top={13} left={-6} >
                 <img src={ document.body.clientWidth <= 414 ? imgheadermobile :  window.screen.width <= 2400 ? imgHeader1 : '' }  className={ document.body.clientWidth <= 414 ? "imgheadermobile" :   window.screen.width <= 2400 ? 'imgheader': '' } />
           </Box>

       </Box>
           </Container>
       </Box>
    )
}

export default Header;