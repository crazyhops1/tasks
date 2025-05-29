import React, { useState } from 'react';

const Task1 = () => {
  const initialTasks = [
    { id: 1, task: "Onboarding Call", result: [] },
    { id: 2, task: "Google Search Console Access", result: [] },
    { id: 3, task: "Google Analytics Access", result: [] },
    { id: 4, task: "Website Access", result: [] },
    { id: 5, task: "Technical Audit", result: [] },
    { id: 6, task: "Anchor Text and Semantic Analysis", result: [] },
    { id: 7, task: "Competitor Analysis", result: [] },
    { id: 8, task: "Anchor Text / URL Mapping", result: [] },
    { id: 9, task: "Google Data Studio Report + Local Reporting Suite", result: [] },
    { id: 10, task: "Site Level Optimization", result: [] },
    { id: 11, task: "On Page Optimization", result: [] },
    { id: 12, task: "Content Creation", result: [] },
    { id: 13, task: "Content Publishing", result: [] },
    { id: 14, task: "Premium Press Release", result: [] },
    { id: 15, task: "Authority Niche Placements", result: [] },
    { id: 16, task: "Review Management", result: [] },
    { id: 17, task: "Index Links", result: [] },
    { id: 18, task: "Video Recap", result: [] }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  //  here  we will add a new functionality. like  add new column
  const addNewCol = 8;

  const editContent = (e, rowIndex, colIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[rowIndex].result[colIndex] = e.target.textContent;
    setTasks(updatedTasks);
    //  here we can check see  updated  data in console
    console.log(updatedTasks); 
  };

  return (
    <div  className='mt-5'>
      <table className="table table-bordered border-primary" style={{ overflow: 'scroll', width: '100vw' }}>
        <thead>
          <tr>
            <th>month 1</th>
          
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td>{item.task}</td>
              {[...Array(addNewCol)].map((_, colIndex) => (
                <td
                  key={colIndex}
                  contentEditable
                  suppressContentEditableWarning={true}
                  onBlur={(e) => editContent(e, rowIndex, colIndex)}
                >
                  {item.result[colIndex] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task1;
