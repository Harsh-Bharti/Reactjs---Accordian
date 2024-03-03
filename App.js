import React, { useState } from "react";
import { Question } from "./api";
import MyAccordion from "./MyAccordion"

const App=()=>{
  const[Data, setData]= useState(Question);

  return <>
  <section className="container">
    <h1>React Interview Questions</h1>
  {
    Data.map((curElem)=>{
      const { id } = curElem;
      return <MyAccordion key= {id} { ...curElem } />
    })
  }
  </section>
  </>
}

export default App;
