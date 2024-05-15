import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from "sweetalert2";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";



const UpdateJob = () => {

    const {user} = useContext(AuthContext);
    const jobs = useLoaderData();
    console.log(jobs);

    const {_id,name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select} = jobs || {};


    const [startDate, setStartDate] = useState(new Date());
    
 

 


    const handleFrom = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const job_title = form.job_title.value;
        const email = user?.email;
        const salary = form.salary.value;
        const job_description = form.job_description.value;
        const posting_data = form.posting_data.value;
        const select = form.select.value;
        const deadline = startDate;

        if(deadline === posting_data){
            alert('Deadline is over');
        }

        let applicantNumber = parseInt(form.applicantNumber.value);

        const AddJobUser = {name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select};

        console.log(AddJobUser);

        axios.put(`https://career-builder-server-one.vercel.app/applyJob/${_id}`, AddJobUser)
        .then(res => {
            console.log(res.data);

            if(res.data.modifiedCount > 0){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job  Update Success ",
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
       
        })
        .catch(error =>{
            console.log(error);
        })





    }


    return (
        <div className="my-11">
            
        <section className="bg-white dark:bg-gray-900 ">
<div className="flex gap-5 justify-center min-h-screen">


    <div className="flex items-center bg-amber-300 shadow-lg shadow-gray-500 w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full">
            <h1 className="text-3xl font-bold text-center  tracking-wider text-gray-800 capitalize dark:text-white">
            Update A Job 
            </h1>


        
            {/* form */}
            <form onSubmit={handleFrom} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200"> Picture URL</label>

                    <input type="text" defaultValue={photo} name="photo" placeholder=" Picture URL of the Job Banner" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg" />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Title</label>

                    <input type="text" defaultValue={job_title} name="job_title" placeholder="Job Title" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200"> User Name</label>
                    <input type="text" readOnly defaultValue={user?. displayName} name="name" placeholder=" User Name" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email </label>
                    <input type="email" name="email" placeholder=" User Email" readOnly defaultValue={user?.email} required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Salary range</label>
                    <input type="text" defaultValue={salary} name="salary" placeholder="Salary range" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                </div>


                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Category</label>

                    <select name="select" defaultValue={select} className="select select-bordered w-full">
                     <option selected>On Site</option>
                    <option>Remote</option>
                    <option>Part-Time</option>
                    <option>Hybrid</option>
                     </select>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Description</label>
                    <input type="text" defaultValue={job_description} name="job_description" placeholder="Job Description" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg" />
                </div>


                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Posting Date</label>
                    <input type="date" defaultValue={posting_data} name="posting_data" placeholder="Job Posting Date" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Deadline</label>

                    <DatePicker className="border p-3 rounded-xl" name="deadline" defaultValue={deadline} selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Job Applicants Number</label>
                    <input type="text"  defaultValue={0} name="applicantNumber" placeholder="Job Applicants Number" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg " />
                </div>




                <button className="btn btn-info w-full mx-auto"> Update </button>
            </form>
        </div>
    </div>
</div>
</section>
    </div>
    );
};

export default UpdateJob;