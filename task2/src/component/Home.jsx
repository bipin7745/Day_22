import logo from '../assets/home.jpg'
function Home()
{
    return(
        <>
    <div>
        <h1 style={{textAlign:"center",}}>Hello Home Page</h1>
        <img
            src={logo}
            alt="logo home page"
            style={{width: "200px", height: "200px", marginLeft:"45%"}}
        />
        <p style={{color:"red"}}>This is Home Page</p>
    </div>
        </>
    )
}
export default Home;