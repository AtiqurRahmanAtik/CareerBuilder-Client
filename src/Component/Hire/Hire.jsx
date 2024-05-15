import axios from "axios";
import { useEffect, useState } from "react";


const Hire = () => {

    const [user, setUser] = useState([]);
    

    useEffect(()=>{
           axios('/FakeData.json')
           .then(res => {
           setUser(res.data);
           })
           .catch(error => {
            // console.log(error);
           })


    }
    ,[])

    return (
        <div className="my-12  space-y-5 p-5">


                <div className="space-y-5">
                <h1 className="text-3xl font-bold text-center">Hire Talents & Experts</h1>     

<p className="text-center">Get matched with top talents. Our mission is to connect expert marketers with businesses <br /> quickly and seamlessly. Create a profile. box. Describe the talent.</p>

                </div>

            <div className="grid lg:grid-cols-3 gap-5">
                {
                    user.map((item) =>   <div key={item._id} className="card w-96 bg-orange-400 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img  src={item.image} alt="Shoes" className="w-44 h-40 rounded-full" />
                    </figure>
                    <div className="card-body items-center ">
                      <h2 className="card-title">{item.occupation}</h2>
                      <h1 className="">{item.name}</h1>

                      <div>
                       
                       <h1>{item.skills.map(item=> <li key={item}>
                          {item}
                       </li>)}</h1>
                 
               </div>

                      <div className="flex gap-4">
                        <h1> <span className="text-xl font-bold"> Location :</span> {item.location}</h1>
                        <h1><span className="text-xl font-bold"> Experience :</span>  {item.experience_years} Years</h1>
                      </div>
                    
             
                    </div>
                  </div> )
                }
            </div>

    
        </div>
    );
};

export default Hire;