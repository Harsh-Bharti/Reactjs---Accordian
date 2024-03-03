import React from "react";
import { useState } from "react";

const MyAccordion=({question, answer})=>{
    const[Show, setShow]= useState(false);

    const showAns=()=>{
        setShow(!Show);
    }
    return<>
    <div className="main-div">
        <p className="plus" onClick={showAns}> { Show? "➖": "➕" } </p>
        <h3>{question}</h3>
    </div>
    {Show && <p className="ansr">{answer}</p>}
    </>
}

export default MyAccordion;