
import { Link, NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const NavigationBar = () => {

    const {user,logOut} = useContext(AuthContext);

    const [theme, setTheme] = useState('light')

  // update state on toggle
  const handleButton = e => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])






    const list = <>
    
    <NavLink to='/'> <li><a>Home</a></li></NavLink>
    <NavLink to='/allJobs'> <li><a> All Jobs</a></li></NavLink>

    
    <NavLink to='/blog'> <li><a> Blogs </a></li></NavLink>
  
    </> 


    //logOut
    const handleLogOut = () =>{
        logOut()
        .then(() => {
            
            // console.log(' Sign-out successful.')
          })
          .catch((error) => {
            // console.log(error);
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
    <Link to='/' className="btn btn-ghost text-xl">  Career <span className="text-orange-400">Builder</span></Link>
  </div>


  <div className="navbar-center space-x-7 hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      
      {list}
    </ul>

      

                {/* Them button */}
                <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>

  <input onChange={handleButton} type="checkbox"  className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>


  </div>





        
      
    

  <div className="navbar-end">


        {/* dropdown  */}
        {  user && <div className="dropdown dropdown-end z-30">
            <div tabIndex={0} role="button" title={user.displayName} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" referrerPolicy="no-referrer" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-red-400 rounded-box w-52">
              <li>
                <Link to='/addjob' className="justify-between">
                    Add A Job
                    
                </Link>
              </li>


             <Link to='/appliedJobs'>  <li><a>Applied Jobs</a></li></Link>

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