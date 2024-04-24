import Banner from "./Componenets/Banner/Banner";
import Events from "./Componenets/Events/Events";
import HostEvent from "./Componenets/HostEvent/HostEvent";
import Navbar from "./Componenets/Navbar/Navbar";
import QRScanner from "./Componenets/QRScanner/QRScanner";


 const Home =()=>{
  return (
    <div className=" ms-[140px] me-[140px]"> 
    <Navbar/>
    <Banner/>
    <Events/>
    <HostEvent/>
    <QRScanner/>
   
    </div>
  );
}
export default Home 
