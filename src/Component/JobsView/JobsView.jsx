import { useLoaderData } from "react-router-dom";


const JobsView = () => {

    const singleJob = useLoaderData();
  

    const  {name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select} = singleJob;


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
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>     
        </div>
    );
};

export default JobsView;