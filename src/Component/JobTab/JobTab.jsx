import { Link } from "react-router-dom";


const JobTab = ({job}) => {

      // console.log(job);
      const {_id,category,name,job_title,posting_date,salary_range,deadline,applicants_number} = job;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Job Title : {job_title} </h2>
          
      
          <div className="">
              <h2> Name : {name}</h2>
              <h2>Category  : {category}</h2>
              
          </div>
      
      
          <div className="flex justify-between">
              <h2> Salary : {salary_range}</h2>
              <h2>DeadLine  : {deadline}</h2>
              
          </div>
      
          <div className="flex justify-between">
              <h2> Posting Date : {posting_date}</h2>
              <h2> Applicants Number  : {applicants_number}</h2>
              
          </div>
      
              {/*view details  */}
          <div className="card-actions ">
            
            <Link to={`/job/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default JobTab;