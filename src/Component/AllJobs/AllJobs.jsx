import { Link, useLoaderData } from "react-router-dom";


const AllJobs = () => {


    const jobs = useLoaderData([]);
    
   

    return (
       
            <div className="overflow-x-auto my-11 space-y-7 text-center ">


                <h1 className="text-3xl font-bold text-green-600">  All Jobs page : {jobs.length}</h1>


  <table className="table border ">
    {/* head */}
    <thead>
      <tr>
       
        <th className="text-2xl font-bold text-black">Job Title</th>
        <th  className="text-2xl font-bold text-black">Job Posting Date</th>
        <th  className="text-2xl font-bold text-black">Application Deadline</th>
        <th  className="text-2xl font-bold text-black">Salary range</th>
        <Link > <th  className="text-2xl font-bold text-black">Details</th></Link>

      </tr>
    </thead>


    <tbody>
      {/* row 1 */}
     
        {
            jobs.map((jobs) =>  <tr key={jobs._id}>
       
            <td>
              <div className="flex jobss-center gap-3">
            
                <div>
                  <div className="font-bold">{jobs.job_title}</div>
                  
                </div>
              </div>
            </td>
            <td>
             {jobs.posting_data}
             
            </td>
           
            <td>{jobs.email}</td>

    
            <td>{jobs.salary}</td>
    

        <th>
       
       <Link to={`/viewDetail/${jobs._id}`}>   <button className="btn btn-warning btn-xs">details</button></Link>
        </th>
      </tr>
        )
    }


   
    </tbody>
 
    
    
  </table>
</div>
      
    );
};

export default AllJobs;