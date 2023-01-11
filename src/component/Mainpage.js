import { useState } from "react";
import MobileMenu from "./MobileMenu";
import BootstrapMenu from "./BootrapMenu";
import { Button } from "react-bootstrap";
import Carddetail from "../Carddetails/carddetail";
import { Card } from "antd";
import Smallcard from "../Carddetails/smallcard";
import Backgroundcomponent from "./Backgroundcomponent";
import Footer from '../footer/Footer'

export default function Mainpage() {
  const [enableMobileMenu, setEnableMenu] = useState(false);

  return (
    <div className="App">
      <div className="main-menu">
        <div className="main-menu-desktop-mode">
          <BootstrapMenu />
        </div>
        <div className="main-menu-mobile-mode">
          <div className="text-right">
            <Button
              className="fas fa-bars menu-bar-icon"
              onClick={() => setEnableMenu(!enableMobileMenu)}
            >logo</Button>
            <div className="mobile-menu-area">
              {enableMobileMenu && <MobileMenu />}
            </div>
          </div>
        </div>
      </div>
      <div style={{background:'light-gray'}}>
        <div  className="container mt-5">
     
          <center><b style={{fontFamily:'serif',fontSize:'40px'}}>Find the perfect plan for your business.</b></center>

         <div>
        
          <Carddetail />

         </div>
        
        </div>
      </div>
      <div>
        <Smallcard/>
      </div>
      
      <div style={{ 
      backgroundImage: `url("./background.jpg")` ,height:'500px',filter:'brightness(50%)',backgroundRepeat:'no-repeat',backgroundSize:'cover'
    }}>
      <Backgroundcomponent/>
      
    </div>
    <div>
      <Footer/>
    </div>
  
    </div>
  );
}
