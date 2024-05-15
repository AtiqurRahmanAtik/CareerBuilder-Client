import { Link } from "react-router-dom";


const JobTab = ({job}) => {

      // console.log(job);
      const {_id,category,name,job_title,posting_date,salary_range,deadline,applicants_number,image} = job;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="w-96 h-64 " src={image} alt="Shoes" /></figure>

        <div className="card-body space-y-3">
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
          <div className="card-actions mx-auto">
            
            <Link to={`/job/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default JobTab;