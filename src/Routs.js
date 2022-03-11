import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./Pages/Home";
import Intro from "./Components/Intro";
import Intro2 from "./Components/Intro2";
import Menu from "./Components/Menu";
import Contacts from "./Pages/Contacts";




const Rotes = () =>{
    return (

        <Router>
            <Routes>
          <Route  path="/"  element={<Intro/>}/>
          <Route  path="/process2"  element={<Intro2/>}/>
          <Route  path="/home"  element={<Home/>}/>
          <Route  path="/contato"  element={<Contacts/>}/>
       

            </Routes>
    </Router>
    )
      

         
      
}

export default Rotes;