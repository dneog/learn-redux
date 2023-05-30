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
  const handleAdd = () => {
    dispatch({
      type: 'ADD',
    })
  };
 
  const toggleAuth=()=> {
    dispatch({
      type: 'TOGGLE',
      
    })
  }

  

  return (
    <>
    <div className="header">
      <div>
        <p>Redux Auth</p>
      </div>
     {isLoggedIn &&  <div className="prod">
        <p>My Products</p>
        <p>my Sales</p>
        <button className="but" onClick={toggleAuth}>Logout</button>
      </div> }
     
      
    </div>
    {!isLoggedIn ? (
      <div className="login">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="but2"  onClick={toggleAuth}>Login</button>
    </div>
    ) : (
      <div className="login2">
      <p>My User Profile</p>
    </div>
    )}

   

    


      <section className="section">
      <div className="">   
        <h3 className="count">Counter App</h3>

        <h1 className="h1">{count}</h1>

        <div>
          <button  onClick={handleSubtract}>
            Subtract
          </button>
          
          <button  onClick={handleAdd}>
            Add
          </button>
          
        </div>

        
      


      </div>
    </section>
    </>
  );
};

export default Counter;
