import { Link } from "react-router-dom";


const AllJobs = () => {
    return (
       
            <div className="overflow-x-auto my-11 space-y-7 text-center ">


                <h1 className="text-3xl font-bold text-green-600">  All Jobs page</h1>


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
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
        
            <div>
              <div className="font-bold">Hart Hagerty</div>
              
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
         
        </td>
        <td>Purple</td>

        <td>Purple</td>

        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>


      {/* row 2 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
        
            <div>
              <div className="font-bold">Hart Hagerty</div>
              
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
         
        </td>
        <td>Purple</td>

        <td>Purple</td>

        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
    </tbody>
 
    
    
  </table>
</div>
      
    );
};

export default AllJobs;