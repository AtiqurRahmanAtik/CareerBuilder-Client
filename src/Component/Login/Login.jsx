import { FcGoogle } from "react-icons/fc";
import photo from "../../assets/Image/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { loginUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const loggedUser = {email,password};
        console.log(loggedUser);

        //loginUser
        loginUser(email,password)
        .then(result =>{

            Swal.fire({
                title: 'Success',
                text: 'Login Successful ',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{

            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'ok'
              })
            console.log(error);
        })

    }



   
    //google singin
    const handleGoogle = ()=>{

        googleSignIn()
        .then(result =>{
            Swal.fire({
                title: 'Success',
                text: 'Login Successful ',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            const users = result.user;
            console.log(users);
           
        })
        .catch(error=>{
            console.log(error);
        })
      }

    return (
        <div>
            
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col  gap-5 lg:flex-row-reverse">
    <div className="flex-1 text-center space-y-2 lg:text-left">
      <h1 className="text-5xl font-bold text-center">Please Login  </h1>
        
        <img src={photo} alt="" />
    </div>


    {/* form */}
        
        <div className="flex-1 p-5 bg-[url('https://i.ibb.co/TbsVX95/bg-imgae.jpg')] space-y-4 rounded-3xl">


        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter the email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter the password " className="input input-bordered" required />
        
        </div>

        

        <div className="form-control mt-6">
          <button  className="btn text-2xl font-bold text-black btn-primary bg-gradient-to-r from-red-600 to-indigo-500">Login</button>
          
        </div>

       
       
          

        <div className="text-center">
            <h1>Don't Have An Account ? Please<Link to='/register'> <button className="btn btn-link">Registration</button></Link></h1>
        </div>

        <hr />
        </form>

        {/* google login */}
        <div className="space-y-3">
            <h1 className="text-center text-2xl font-semibold">Login With </h1>

           <div  className="text-center">
          
           <button onClick={()=> handleGoogle()} className="btn w-2/5 text-2xl font-semibold space-x-2">
           <div >
           <FcGoogle className="text-3xl"></FcGoogle>
           </div>
           <div>
           Google
           </div>
            </button>
            
           </div>
        </div>


        </div>
  </div>
</div>
        </div>
    );
};

export default Login;