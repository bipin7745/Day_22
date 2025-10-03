import NotLoggedIn from "./NotLoggedIn";

export default function UserPoints({login, userName, value, Location = 'India'}){
    function double(number) {
        return number * value;
    }

    return(
        <>
        {login === true ? 
            <p style={{color: "#6020f5", fontSize: '1rem', fontWeight: 'bold'}}>
              {`${userName} have ${double(2)} points at ${Location}`}
            </p> : <NotLoggedIn/>
          }
          </>
    )
}