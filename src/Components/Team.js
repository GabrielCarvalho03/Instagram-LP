import { Box, Container, Title } from "../Css/global";

import team from '../Assets/team.png'


const Team = ({icon , top, title , text}) => {
    


    return(
    <Container  top={18} >
        <Title text="center" bold> Nosso Time</Title>
        <Box left={10} top={15}row justify="center" >
       <img src={team} className="imgTeam" />
        </Box>
    </Container>
 
      )

}

export default Team;