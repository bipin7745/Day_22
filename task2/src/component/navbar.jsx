
import clogo from '../assets/logo.jpg';
import '../App.jsx'
import UserLogin from './userLogin';



function Navbar() {
  const  login=false;
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={clogo} alt="ShopWave Logo" />
          <p>ShopWave</p>
        </div>
        <div className="menu">
          <ul>
            <li><a href="/home"> Home</a></li>
            <li><a href="/abouts">About</a></li>
            <li><a href="/setting">Settings</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

           <div className="auth-buttons">
          <UserLogin login={login}/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
