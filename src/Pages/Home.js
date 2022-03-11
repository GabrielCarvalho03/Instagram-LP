import {Box, Container} from '../Css/global'

import logoout from '../Assets/logoout.svg'
import SolarEnergy from '../Assets/SolarEnergy.png'
import rowup from '../Assets/rowup.png'


import Header from "../Components/Header";
import Diferentials from "../Components/Diferentials";
import Rel from "../Components/Rel";
import Menu from "../Components/Menu";
import Intro from "../Components/Intro";
import Services from "../Components/Services";
import Team from "../Components/Team";
import Opinion from "../Components/Opinion";
import Footer from "../Components/Footer";




const Home = () => {


    return(
        <>
        
        {window.document.body.clientWidth <=850 ?
            <Box  className="boxmenuMobile" >
           <Container>
               <Box row justify="space-between" >
                <Box>
                    <img  src={logoout} className="logomenumobile" />
                </Box>
                <Box row  >

                  <Box>
                      <img src={SolarEnergy} className="iconmenumobile" />
                  </Box>

                  <Box left={20}>
                      <img src={rowup} className="iconmenumobile" />
                  </Box>
                </Box>

               </Box>
           </Container>
            </Box>
        : ''}
        <Menu/>
        
        <Header/>
        <Diferentials/>
        <Rel/>
        <Services/>
        <Team/>
        <Opinion/>
        {/* Menu Mobile   */}

        <Footer/>
       
       
        </>

  
   
    )
}

export default Home;