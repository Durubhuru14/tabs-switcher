import { useEffect, useState } from "react";
import JobsInfo from "./JobsInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log("There was some errors in fetching the data.");
      }
      const newJobs = await res.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
