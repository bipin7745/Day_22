import '../component/navbar.css';
function UserLogin({login})
{
  return(
    <>
      {!login  ?(
          <>
           <button className="auth-button">Login</button>
          <button className="auth-button">Register</button>
          </>
      )
      :
      (
          <button className="auth-button">Profile</button>
       
      )
         }
</>
  )
}
export default UserLogin;