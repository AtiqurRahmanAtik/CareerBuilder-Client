
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobTab from "../JobTab/JobTab";

const JobCategory = () => {

    const [user,setUser] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/job')
        .then(res=> res.json())
        .then(data =>{
            setUser(data);
        })

    },[])

    
    return (
      <div className='my-9'>

            <h1 className='text-3xl font-bold text-center'>  Job by category</h1>

            {/* tabs section */}
            <Tabs>
            <div className='flex items-center justify-center'>
            <TabList>
      <Tab>On-Site Job</Tab>
      <Tab checked>Remote Job</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part-Time</Tab>
    </TabList>
            </div>

    <TabPanel>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 '> 
        {
            user.filter(j=> j.category === 'On-Site').map((job) => <JobTab key={job._id} job={job} ></JobTab>)
        }
</div>
    </TabPanel>

    <TabPanel>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {
            user.filter(j=> j.category === 'Remote').map((job) => <JobTab key={job._id} job={job}></JobTab>)
        }
      </div>
    </TabPanel>

    <TabPanel>
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 '> 
        {
            user.filter(j=> j.category === 'Hybrid').map((job) => <JobTab key={job._id} job={job} ></JobTab>)
        }
</div>
    </TabPanel>

    <TabPanel>
       <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 '> 
        {
            user.filter(j=> j.category === "Part-Time").map((job) => <JobTab key={job._id} job={job} ></JobTab>)
        }
</div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default JobCategory;