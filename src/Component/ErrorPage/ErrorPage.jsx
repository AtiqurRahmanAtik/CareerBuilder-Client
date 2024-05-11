import { Link, useRouteError } from "react-router-dom";
import photo from "../../assets/Image/404.gif";


const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);

    return (
        
            <div >
                
                <div className=" text-center font-bold space-y-3">
                <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <div>
        <Link to='/'>  <button className="btn bg-red-500"> Back to Home</button></Link>
      </div>
                </div>

                

      <div >
        <img className="mx-auto" src={photo} alt="" />
      </div>
    </div>
       
    );
};

export default ErrorPage;