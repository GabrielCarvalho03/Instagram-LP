import { useState } from "react";

import { Box, Container, Title } from "../Css/global";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import logoon from '../Assets/logoon.svg'

import logoout from '../Assets/logoout.svg'
import SolarEnergy from '../Assets/SolarEnergy.png'
import rowup from '../Assets/rowup.png'

const Contacts = () => {

 const handlemesage = () =>{

  
    if(credentials.Nome == '' || credentials.email== '' || credentials.message == ''){
        toast.error('Opa !! Verifique se todos os campos estão preenchidos e tente novamente .')
    }else{
        toast.success('deu tudo certo no envio da mensagem !')
    }
    
 }
 const [credentials, setCredentials] = useState({
     Nome:'',
     email: '',
     message : ''
 })
    return(

    




        <Box className={window.document.body.clientWidth <= 850 ? "backgroundmobile" :  "boxcontacts"} row justify="center" align="center">

{window.document.body.clientWidth <=850 ?
            <Box  className="boxmenuMobile" >
           <Container>
               <Box row justify="space-between" >
                <Box  onClick={() =>window.location.href="/"} >
                    <img  src={logoout} className="logomenumobile" />
                </Box>
                <Box row  >

                  <Box>
                      <img src={SolarEnergy} className="iconmenumobile" />
                  </Box>

                  <Box left={20} >
                      <img src={rowup} className="iconmenumobile" />
                  </Box>
                </Box>

               </Box>
           </Container>
            </Box>
        : ''}

            <Container>

    { window.document.body.clientWidth >= 851 ?   <Box row justify="space-between">
           <Box cursor paddingTop={1} onClick={() =>window.location.href="/"}>
               <img src={ logoout} className="logocontactsmenu" />
           </Box>

           <Box  >
               <Title  cursor opacity size={25}  onClick={() =>window.location.href="/"}>Voltar para o inicio </Title>
           </Box>
        </Box> : "" }
                <Box paddingTop={1.5} >

                <Box className="caixacontatos" >
                 <Container>
                     <Box className="boxcontactsmobile"  row justify="space-between" paddingTop={6}>
                         <Box className="boxcontactstitle">
                             <Title bold >Entrar em Contato</Title>
                             <Box top={10} >
                            <img  src={window.document.body.clientWidth > 850 ? logoon : ''}  className="logocontact"  />
                             </Box>


                             <Box paddingTop={10} row justify="space-between"  className="boxtextFooter">
              <Box>
                  <Title size={20} > Av Antônio perereia 222</Title>
                  <Title top={8} size={20} > (11) 9 9999- 9999</Title>
                  <Title top={8}  size={20} > subtletouch@gmail.com</Title>
                  <Box color="dark" height={0.5}></Box>
              </Box>
              
             
          </Box>


                         </Box>



                         <Box  className="form" right={10}>
                             <Box>
                             <Title size={20}>Primeiro nome</Title>
                             <input type="text" className="input1"  
                             onChange={(e)=>
                             setCredentials({
                                 ...credentials,
                                 Nome : e.target.value
                             })
                            }
                             />

                             </Box>
                             <Box top={15}>
                             <Title size={20}>Email</Title>
                             <input type="email" required className="input1" 
                             onChange={(e)=>
                                setCredentials({
                                    ...credentials,
                                    email : e.target.value
                                })
                               }
                             />
                             </Box>

                             <Box top={15}>
                             <Title size={20}>Sua mensagem</Title>
                            <input className="input2"
                            onChange={(e)=>
                                setCredentials({
                                    ...credentials,
                                    message : e.target.value
                                })
                               }

                            />
                            </Box>

                            <Box top={5}>
                         <Box  onClick={handlemesage} className="btncontactenviar" >
                            <Title color="white" size={20} >Enviar</Title>
                            <ToastContainer
                             autoClose={3000}
                            />
                         </Box>
                            </Box>

                         </Box>


                     </Box>
                 </Container>
                </Box>
                </Box>
            </Container>
        </Box>
      
  
   
    )
}

export default Contacts;