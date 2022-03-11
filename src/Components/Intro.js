import { useState } from "react";

import { Container, Title, Box } from "../Css/global";

import { Link } from "react-router-dom";
import heart from '../Assets/heart.svg'


import logoout from '../Assets/logoout.svg'
import logoon from '../Assets/logoon.svg'






const Intro = () => {
    
    const [img,setImg] = useState(false)

     const setimagem= setTimeout(() => {
         
         setImg(true)
     }, 2000);

  const test = setTimeout(() => {
        
    window.location.href="/home"

            
        },  3000 ) 


    return(
     <Box className="boxintro">
       <Box className="boxlogout"  >
           <img  src={ img== false ?  logoout : img== true ?  logoon : ''} className={ img== false ? 'imglogoout' :  img==true ? "imglogoon" : '' } />

       <Box className="Container-proggesbar" >
           <Box className="proggesbar">

           </Box>

       </Box>
       </Box>

     
     </Box>
      )

}

export default Intro;