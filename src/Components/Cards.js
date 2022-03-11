import { Box, Container, Title } from "../Css/global";

import user from '../Assets/User.png'
import back from '../Assets/back.png'
import front from '../Assets/front.png'

const Cards = ({icon , top, title , text}) => {
    


    return(
    <Box   className="cardbox" top={top}>
        <Box className="box">
            <img  src={icon=='user' ? user: icon =='back' ? back : icon == 'front' ? front : ''} />
            <Title top={10} size={20} bold > {title}</Title>
            <Title size={20} text="center" top={10} opacity >{text}</Title>

        </Box>

    </Box>
 
      )

}

export default Cards;