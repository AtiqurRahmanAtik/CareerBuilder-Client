
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const NavigationBar = () => {

    const {user,logOut} = useContext(AuthContext);

    const list = <>
    
    <NavLink to='/'> <li><a>Home</a></li></NavLink>
    <NavLink to='/allJobs'> <li><a> All Jobs</a></li></NavLink>

    
    <NavLink > <li><a> Blogs </a></li></NavLink>
  
    </> 


    //logOut
    const handleLogOut = () =>{
        logOut()
        .then(() => {
            
            console.log(' Sign-out successful.')
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
       
            <div className="navbar bg-[#818cf8] rounded-xl">
  <div className="navbar-start">

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>

      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {list}
      </ul>
      
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Career <span className="text-orange-400">Builder</span></Link>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {list}
    </ul>
  </div>





        
      
    

  <div className="navbar-end">


        {/* dropdown  */}
        {  user && <div className="dropdown dropdown-end z-30">
            <div tabIndex={0} role="button" title={user.displayName} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" referrerPolicy="no-referrer" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to='/addjob' className="justify-between">
                    Add A Job
                  <span className="badge">New</span>
                </Link>
              </li>


             <Link>  <li><a>Applied Jobs</a></li></Link>

             <Link to='/myjob'>  <li><a>My Jobs</a></li></Link>
             
             <Link to='/'> <button onClick={handleLogOut}>  <li><a>Logout</a></li></button></Link>
            </ul>
          </div>
        }


        {/* login */}

        { !user &&  <div>
                  <Link to='/login'>  <button className="btn  bg-green-400">Login</button></Link>
            </div>
        }
  </div>


</div>


       

       
    );
};

export default NavigationBar;