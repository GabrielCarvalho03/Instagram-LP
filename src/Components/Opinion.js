import { Title,Container, Box } from "../Css/global";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";

import iconrow from '../Assets/iconrow.svg'
import ClienteCard from './ClienteCard'



const Opinion = () => {

  const loadingcontacts = () =>{
    window.location.href='/process2'
  }
 
    return(
     <Container  top={10}>
      <Title bold size={35} text="center" > Qual a opinião dos nossos <br/> clientes sobre nós ?</Title>

     { document.body.clientWidth  >= 990  ?  <Box left={-8} row  >
          <ClienteCard  
          profile={'roberta'}
          name="Roberta Silva"
          text={'Recomendo de mais !! fiz um pedido de uma lading-page e eles me supreenderam.vão sem medo !!'}
          />
          <ClienteCard
                profile={'rodrigo'}
                name="Rodrigo Cesar"
                text={'Empresa otima !! São super atenciosos e responsaveis , parabéns !!'}
          />
          <ClienteCard
            profile={'renan'}
            name="Renan Carvalho"
            text={'São incriveis  Minha pagina na web ficou incrível e meu SEO la em cima .  OBRIGADOO !!'}
          
          />
      </Box> : document.body.clientWidth  <= 880 ? 
 

     
 <Swiper   className="mySwiper">
 <SwiperSlide>

 <ClienteCard  classegeral='boxclass' 
          profile={'roberta'}
          name="Roberta Silva"
          text={'Recomendo de mais !! fiz um pedido de uma lading-page e eles me supreenderam.vão sem medo !!'}
          />
 </SwiperSlide>
 <SwiperSlide>

 <ClienteCard
              classegeral='boxclass' 
                profile={'rodrigo'}
                name="Rodrigo Cesar"
                text={'Empresa otima !! São super atenciosos e responsaveis , parabéns !!'}
          />
 </SwiperSlide>
 <SwiperSlide>
 <ClienteCard
 classegeral='boxclass' 
            profile={'renan'}
            name="Renan Carvalho"
            text={'São incriveis  Minha pagina na web ficou incrível e meu SEO la em cima .  OBRIGADOO !!'}
          
          />
 </SwiperSlide>
 
</Swiper>: ''}



<Box  top={15}  row  className="boxInvite" >
<Title width={90}  bold size={35}> Gostou dos serviços da Subtle touch ? </Title>
<Box className="btnoption" onClick={loadingcontacts}>
                        <Title color="white" size={22}>Entrar em contato</Title>
                        <img  src={iconrow}  className="imgrow"  />
                    </Box>
</Box>
     </Container>
    )
}

export default Opinion;