import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";



const AppliedJobs = () => {

   

    const {user} = useContext(AuthContext);

    const [item, setItem] = useState([]);
    

    // const {name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select} = item;

   
     useEffect(()=>{    
    axios.get(`http://localhost:5000/singleJob/${user?.email}`)
    .then(res =>{
        setItem(res.data);
    })
    .catch(error =>{
        console.log(error);
    })
    },[item]);

    
    return (
        <div className="my-11">
            <h1 className="text-3xl text-center font-bold">Applied Jobs : {item.length}</h1>

         

           

            
<table className="table border mt-7">
    {/* head */}
    <thead>
      <tr>
       
        <th className="text-2xl font-bold text-black">Job Title</th>
        <th  className="text-2xl font-bold text-black">Job Posting Date</th>
       
        <th  className="text-2xl font-bold text-black">Email</th>
        <th  className="text-2xl font-bold text-black">Salary range</th>
        <th  className="text-2xl font-bold text-black">Edite</th>

      </tr>
    </thead>

    <tbody>
      {/* row 1 */}
     
        {
            item.map((item) =>  <tr key={item._id}>
       
            <td>
              <div className="flex items-center gap-3">
            
                <div>
                  <div className="font-bold">{item.job_title}</div>
                  
                </div>
              </div>
            </td>
            <td>
             {item.posting_data}
             
            </td>
           
            <td>{item.email}</td>

    
            <td>{item.salary}</td>
    
            <th>
            <div className="space-x-3">

           <Link to={`/download/${item._id}`}>  <button className="btn bg-green-500 btn-xs">Download PDF</button></Link>

     
            </div>
            </th>

          </tr>
    )
        }
   
     
    </tbody>
 
    
    
  </table>
        </div>
    );
};

export default AppliedJobs;