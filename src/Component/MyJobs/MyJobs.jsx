
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext,  useEffect,  useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyJobs = () => {

    const {user} = useContext(AuthContext);

    const [item, setItem] = useState([]);

    // const {name,email,photo,job_title,salary,job_description,posting_data,applicantNumber,deadline,select} = item;

   
     useEffect(()=>{    
    axios.get(`http://localhost:5000/myjobs/${user?.email}`)
    .then(res =>{
        setItem(res.data);
    })
    .catch(error =>{
        console.log(error);
    })
    },[item]);



    //handle delete 
    const handleDelete = (id) =>{
       
        axios.delete(`http://localhost:5000/myjob/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "Success",
                    title: "Your Job item is Deleted ",
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
            
        })
        .catch(error => {
            console.log(error);
        })
     
    }



    return (
       
         <div className="overflow-x-auto my-11 space-y-7 text-center ">


<h1 className="text-3xl font-bold text-green-600">  My Jobs page : {item.length}</h1>


<table className="table border ">
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

           <Link to={`/update/${item._id}`}>  <button className="btn bg-green-500 btn-xs">Update</button></Link>

            <button onClick={()=> handleDelete(item._id)} className="btn bg-red-500 btn-xs">Delete</button>
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

export default MyJobs;