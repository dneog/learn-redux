import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
const Counter = () => {

  const count= useSelector((state) => state.count)
  const isLoggedIn= useSelector((state) => state.isLoggedIn)
  const dispatch= useDispatch()
  const handleSubtract = () => {
   dispatch({
    type: 'SUBSTRACT',

   })
  };
  const handleReset = () => {
     dispatch({
    type: 'RESET',
    
   })
  };
  const handleAdd = () => {
    dispatch({
      type: 'ADD',
    })
  };
  const handleAddNumber = (amount) => {
    dispatch({
      type: 'ADD_NUMBER',
      payload: amount
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
          <button  onClick={handleReset}>
            Reset
          </button>
          <button  onClick={handleAdd}>
            Add
          </button>
          <button  onClick={()=> handleAddNumber(5)}>
            Add 5
          </button>
        </div>

        </>
      


      </div>
    </section>
  );
};

export default Counter;
