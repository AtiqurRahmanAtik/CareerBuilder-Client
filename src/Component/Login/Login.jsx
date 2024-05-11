import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col  gap-5 lg:flex-row-reverse">
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>


    {/* form */}
        
        <div className="flex-1 p-5 bg-[url('https://i.ibb.co/TbsVX95/bg-imgae.jpg')] space-y-4 rounded-3xl">
        <form >
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
          <button className="btn text-2xl font-bold text-black btn-primary bg-gradient-to-r from-red-600 to-indigo-500">Login</button>
          
        </div>

       
       
          

        <div className="text-center">
            <h1>Don't Have An Account ? Please<button className="btn btn-link">Registration</button></h1>
        </div>

        <hr />
        </form>

        
        <div className="space-y-3">
            <h1 className="text-center text-2xl font-semibold">Login With </h1>

           <div  className="text-center">
          
           <button className="btn w-2/5 text-2xl font-semibold space-x-2">
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