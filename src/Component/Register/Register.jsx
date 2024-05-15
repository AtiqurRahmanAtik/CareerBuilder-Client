import { Link } from "react-router-dom";
import photo from "../../assets/Image/register.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    
    const { createUser,updateUserProfile,user,setUser} = useContext(AuthContext);

    const handleRegister = (e) =>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
       
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const registerUser = {name,email,photo,password};
        // console.log(registerUser);

        //createUser 
        createUser(email,password)
        .then(result =>{

            Swal.fire({
                title: 'Success',
                text: 'Registration Successful ',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            // console.log(result.user);

            //updateProfile
            updateUserProfile( name,photo )
            setUser({...user,displayName:name, photoURL:photo })

            alert('successfully register');
        })
        .catch(error=>{

            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'ok'
              })
            // console.log(error);
        })


    }


    return (
        <div>
            
        <div className="hero  bg-base-200">
<div className="hero-content flex-col  gap-5 lg:flex-row-reverse">
<div className="flex-1 text-center space-y-2 lg:text-left">
  <h1 className="text-5xl font-bold text-center">Please Register  </h1>
    
    <img src={photo} alt="" />
</div>


{/* form */}
    
    <div className="flex-1 p-5 bg-[url('https://i.ibb.co/TbsVX95/bg-imgae.jpg')] space-y-4 rounded-3xl">

    
   
    <form onSubmit={handleRegister}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Enter the Name" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="Enter the email" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text"> Photo URL</span>
      </label>
      <input type="text" name="photo" placeholder="Enter the Photo URL" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="Enter the password " className="input input-bordered" required />
    
    </div>

    <div className="form-control mt-6">
      <button className="btn text-2xl font-bold text-black btn-primary bg-gradient-to-r from-red-600 to-indigo-500">Login</button>
      
    </div>

   
   
      

    <div className="text-center">
        <h1> Have An Account ? Please<Link to='/login'> <button className="btn btn-link">Login</button></Link></h1>
    </div>

    <hr />
    </form>

    
    <div className="space-y-3">
        <h1 className="text-center text-2xl font-semibold">Login With </h1>

     
    </div>
    </div>
</div>
</div>
    </div>
    );
};

export default Register;