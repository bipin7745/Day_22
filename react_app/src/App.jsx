
import viteLogo from './asset/logo.jpg'
import './App.css'
import UserPoints from './component/UserPoints';

function App() {
 let userName="bipin";
 let value = 10;

 let Location = 'USA'

 let login = true;


  return (
    <>
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={viteLogo} alt="c_logo" srcset="" />
          <p>ShopWave</p>
        </div>
        <UserPoints login={login} userName={userName} value={value} Location={Location}/>
          <div className="menu">
            <ul>
              <li><a href="/home">Home </a></li>
              <li><a href="/abouts">Abouts</a></li>
              <li><a href="/setting">Setting</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <UserPoints login={login} userName={userName} value={value}/>
          
          <div className='login_button'>
      Login 
          </div>
      </nav>
    </div>
    </>
  )
}

export default App
