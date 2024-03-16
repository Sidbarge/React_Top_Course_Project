import React from "react";
import "./Spinner.css";

const Spinner=()=>{
    return(
        <div className="flex flex-col items-center space-y-2 m-32">
            <div className='spinner'></div>
            <p className="text-[rgb(34,34,59)] text-lg font-semibold">Loading....</p>
        </div>
    )
}

export default Spinner;