import Banner from "../Banner/Banner";
import Hire from "../Hire/Hire";
import JobCategory from "../Jobategory/JobCategory";
import QuestionAndAnswere from "../QuestionAbout/QuestionAndAnswere";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Hire></Hire>
            <QuestionAndAnswere></QuestionAndAnswere>
           
        </div>
    );
};

export default Home;