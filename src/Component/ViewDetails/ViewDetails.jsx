import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ViewDetails = () => {

    const {user} = useContext(AuthContext);
    const UserJobs = useLoaderData();
    // console.log(UserJobs);


    const {category,name,job_title,posting_date,salary_range,deadline,applicants_number,description} = UserJobs;





    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
        {/* Job Details */}
        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-light text-gray-800 '>
              Deadline: {deadline}
            </span>
            <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
             {job_title}
            </span>
          </div>
  
          <div>
            <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
              {category}
            </h1>
  
            <p className='mt-2 text-lg text-gray-600 '>
             {description}
            </p>
            <p className='mt-6 text-sm font-bold text-gray-600 '>
            Posting Date: {posting_date}
            </p>
            <div className='flex items-center gap-5'>
              <div>
                <p className='mt-2 text-sm  text-gray-600 '>Name: {name}</p>
               
              </div>
              <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                <img src='' alt='' />
              </div>
            </div>
            <p className='mt-6 text-lg font-bold text-gray-600 '>
              {salary_range}
            </p>


          

          </div>
        </div>



       
      </div>
    );
};

export default ViewDetails;