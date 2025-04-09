import React, { useState } from "react";

const Todo = () => {
  const [state,setState] = useState(20);
  return (
    <div className="container">
      
      <h1>{state}</h1>
    
      <span> <button onClick ={()=>setState(state+1)}>increment</button>
      <button onClick={()=>setState(state-2)}>decrement</button>
      <button onClick={()=>setState(state*0)}>reset</button></span>
      
    </div>
  );
};

export default Todo;