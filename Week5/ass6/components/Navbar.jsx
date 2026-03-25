function Navbar()
{
    return(
         <nav className="flex  justify-between border-2 border-black  text-center p-5 text-black mb-5">
            <h1 className="text-3xl">LOGO</h1>
           
              <ul className="flex gap-10  ">
                <li>HOME</li>
                <li>SIGNUP</li>
                <li>LOGIN</li>
              </ul> 
        
        </nav>
    )
}
export default Navbar 