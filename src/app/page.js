"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    // Submit handling done by this function
    e.preventDefault(); // it will stop to reload page
    // console.log(title)
    // console.log(desc)

    setMainTask([...mainTask, { title, desc }]);

    settitle("");
    setdesc("");
  };

  //Delete Handler dunction

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  };

  // Update Handler function
  const editHandlerHandler = (i) => {
    let copyTask =[...mainTask]
    copyTask.map(i)
    setMainTask(copytask)
  };
  

  //To render all task
  let renderTask = <h2 className="text-green-700">No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="text-green flex justify-between items-center w-2/4">
            <h5 className="">{t.title}</h5>
            <h6 className="">{t.desc}</h6>
          </div>


          <button 
          onClick={() => {
            editHandler(i)
          }}
          className="text-white bg-red-500 px-4 py-2 rounded font-bold">
            UPDATE
          </button>

          <button 
          onClick={() => {
            deleteHandler(i)
          }}
          className="text-white bg-red-500 px-4 py-2 rounded font-bold">
            DELETE
          </button>
          
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-green-600 text-white p-5 text-5xl font-bold text-center">
        TO DO LIST
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title Here"
          className="text2xl border-zinc-800 border-2 m-8 px-4 py-2"
          value={title} // It prevents the reload
          onChange={(e) => {
            settitle(e.target.value); // after this value in task section display on console
          }}
        />

        <input
          type="text"
          placeholder="Enter Description Here"
          className="text2xl border-zinc-800 border-2 m-8 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value); // desc text visible in field
          }}
        />

        <button className="bg-emerald-700 p-2 m-5 font-bold text-white rounded">
          Add Task
        </button>

      </form>

      <hr />

      <h1 className="bg-green-500 text-white p-5 text-2xl font-bold text-center">TO DO TASKS DETAILS</h1>

      <div className="p-8 bg-green-200 font-bold">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
