import { useLoaderData } from "react-router-dom";
import ReactPrint from 'react-to-print';
import  { useRef } from 'react';

const Download = () => {

    const jobs = useLoaderData();

    const {_id,name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select} = jobs || {};
    // console.log(jobs);


    const ref = useRef();
    


    return (
        <div className="a">

            <div ref={ref} className="s">

            <div className="mx-auto my-11 max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img className="object-cover w-full h-64" src={photo} alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{name}</span>
            
            <h3 className="mx-1 text-xl  dark:text-gray-300">{email}</h3> 

            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{job_title}</a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{job_description}</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                   <h3>Salary : {salary}</h3>
                </div>
               
            </div>
        </div>

    </div>
</div>
        </div>


        <div className="text-center">
        <ReactPrint trigger={()=>  <button className="btn bg-red-400 ">Download PDF</button>} content={()=> ref.current}/>
        </div>
        </div>
    );
};

export default Download;