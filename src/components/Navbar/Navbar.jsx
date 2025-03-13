import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () =>{
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <span>Mateusz Wojnowski</span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="Fb" /></a>
                    <a href="#"><img src="/instagram.png" alt="IG" /></a>
                    <a href="#"><img src="/youtube.png" alt="YT" /></a>
                </div>
            </div>
        </div>
    )
    
}

export default Navbar