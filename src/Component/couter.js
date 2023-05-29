import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
const Counter = () => {

  const count= useSelector((state) => state)
 
  const dispatch= useDispatch()
  const handleSubtract = () => {
   dispatch({
    type: 'SUBSTRACT',

   })
  };
  const handleAdd = () => {
    dispatch({
      type: 'ADD',
    })
  };
 
  

  

  return (
    <section className="section">
      <div className="">
     
        

     
        <>
        
        <h3>Counter App</h3>

        <h1>{count}</h1>

        <div>
          <button  onClick={handleSubtract}>
            Subtract
          </button>
          
          <button  onClick={handleAdd}>
            Add
          </button>
          
        </div>

        </>
      


      </div>
    </section>
  );
};

export default Counter;
