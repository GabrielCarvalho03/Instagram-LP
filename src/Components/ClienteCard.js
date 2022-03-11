import { Title,Box , Container } from "../Css/global";

import Roberta from '../Assets/Roberta.png'
import Rodrigo from '../Assets/Rodrigo.png'
import Renan from '../Assets/Renan.png'
import stars from '../Assets/stars.png'
const ClienteCard = ({name , text , profile , classe , classegeral}) => {
    return(
     
    <Box top={10}  left={10} className={ classegeral ?  classegeral :"boxclientcard" }>
        <Box row>
            <Box left={3} top={3}>
            <img src={profile == 'roberta' ? Roberta : profile== 'rodrigo' ? Rodrigo : profile =='renan' ? Renan : '' }/>

            </Box>
                <Title top={-5}  className="cardname"   left={5} size={22}>{name}</Title>


        </Box>
        <Box top={-8} left={25} className="boxstarts">
        <img src={stars}/>
        </Box>
        <Box  top={5}>
        <Title className={`${classe}`} opacity size={22}>
      {text}
        </Title>
        </Box>
       
    </Box>

     
    )
}

export default ClienteCard;