import { useContext, useState } from "react";
import { Link,  useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const JobsView = () => {

    const {user} = useContext(AuthContext);
    const singleJob = useLoaderData();

    const [startDate, setStartDate] = useState(new Date());
  

    const  {_id,name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select} = singleJob;



    const handleApply = (e)=>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const resume_link = form.resume_link.value;
        const email = user?.email;
        const job_title = form.job_title.value;
        const salary = form.salary.value;
        const posting_data = form.posting_data.value;
       

        const UserData = {name,email,resume_link,job_title,salary,posting_data,};
        
        // console.log(UserData);


        axios.post('https://career-builder-server-one.vercel.app/singleJob', UserData)
        .then(res => {
            // console.log(res.data);

            if(res.data.modifiedCount > 0){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job  Apply Success ",
                    showConfirmButton: false,
                    timer: 2000
                  });

                
            }
            

        })
        .catch(error =>{
            // console.log(error);
        })
    }



    return (
        <div>
       


        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col gap-7 lg:flex-row">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />

    <div className="space-y-3">
      <h1 className="text-5xl font-bold">{job_title}</h1>

      <p className="py-6">{job_description}</p>

      <div className="flex gap-7">
        <h2> <span className="text-xl font-bold"> Salary : </span> {salary}</h2>
        <h2> <span className="text-xl font-bold"> Job Applicant Number : </span>  {applicantNumber}</h2>

      </div>
    


       {/* model  */}
       <div>
               
               {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-green-500" onClick={()=>document.getElementById('my_modal_5').showModal()}>Apply</button>
<dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle lg:modal-middle">
 <div className="modal-box bg-orange-400">
   <h3 className="font-bold text-lg text-center">Please Apply This job</h3>
   
   
   
   {/* form */}
   <div className="modal-action ">
     <form onSubmit={handleApply} method="dialog">
      
     <div className=' grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
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
                
                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
               />
             </div>
 
             <div>
               <label className='text-gray-700 '  htmlFor='comment'>
               Resume Link

               </label>
               <input
                 id='comment'
                 name='resume_link'
                 type='text'
                 
                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
               />
             </div>



             <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200"> Picture URL</label>
                        <input type="text" name="photo" placeholder=" Picture URL of the Job Banner" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Title</label>
                        <input type="text" name="job_title" placeholder="Job Title" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200"> User Name</label>
                        <input type="text" readOnly defaultValue={user?. displayName} name="name" placeholder=" User Name" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Salary range</label>
                        <input type="text" name="salary" placeholder="Salary range" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Posting Date</label>
                        <input type="date" name="posting_data" placeholder="Job Posting Date" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Deadline</label>

                        <DatePicker className="border p-3 rounded-xl" name="deadline" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

           
           </div>
 
       
          <div className="my-5">
          <button className="btn btn-primary">Submit</button>
               
               <Link to='/'>    <button className="btn bg-black text-white">Close</button></Link>
          </div>
       
     </form>
    
   </div>
 </div>
</dialog>

           </div>



    </div>



   
        




  </div>
</div>     
        </div>
    );
};

export default JobsView;