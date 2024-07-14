

import React from 'react';
import "./Filter.css"


const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-6 gap-y-4 mx-auto py-4 justify-center relative">
        {filterData.map((data)=>{
            return(
                <button key={data.id} className={`text-lg px-2 py-1 rounded-md font-normal text-[#090909] button2 flex items-center justify-center ${
                        category === data.title ? "btnn" : "btn-shine"
                    }`}
                  onClick={() => filterHandler(data.title)}>
                    {data.title}
                </button>
            );
        })}
    </div>
  )
}

export default Filter;