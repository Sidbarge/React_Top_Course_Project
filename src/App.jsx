import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiurl } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
function App() {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category,setCategory]=useState(filterData[0].title)
  const [error,setError]=useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiurl);
      const output = await response.json();
      //Save the data
      setError(false)
      setCourses(output.data)
    }
    catch (error) {
      toast.error("Something went wrong")
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(78,78,105)]">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]">
          <div>
            {error ? 
            (
              <div className="text-5xl font-semibold text-center m-36 text-white">Data Not Found</div>
            ) : 
            (
              loading ? <Spinner /> : <Cards courses={courses} category={category} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
