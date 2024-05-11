import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ViewDetails = () => {

    const {user} = useContext(AuthContext);
    const UserJobs = useLoaderData();
    console.log(UserJobs);


    const {category,name,job_title,posting_date,salary_range,deadline,applicants_number,description} = UserJobs;


    const handleApply = (e)=>{
        
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const applicants_number = parseInt(form.applicants_number.value);
        const email = user?.email;
        const UserData = {name,email,applicants_number};
        
        console.log(UserData);
    }


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
                <p className='mt-2 text-sm  text-gray-600 '>
                  Email: jhankar@mahbub.com
                </p>
              </div>
              <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                <img src='' alt='' />
              </div>
            </div>
            <p className='mt-6 text-lg font-bold text-gray-600 '>
              {salary_range}
            </p>

            <div>
               
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Apply</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    
    
    {/* form */}
    <div className="modal-action">
      <form onSubmit={handleApply} method="dialog">
       
      <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='name'>
                 Name
                </label>
                <input
                  id='name'
                  type='text'
                  name='name'
                  defaultValue={user?.displayName}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  defaultValue={user?.email}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='comment'>
                Applicants_Number
                </label>
                <input
                  id='comment'
                  name='applicants_number'
                  type='text'
                  defaultValue={applicants_number}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            
            </div>
  
        
           <div>
           <button className="btn">Submit</button>
                
                <Link to='/'>    <button className="btn">Close</button></Link>
           </div>
        
      </form>
     
    </div>
  </div>
</dialog>

            </div>
          </div>
        </div>



       
      </div>
    );
};

export default ViewDetails;