import React from "react";
import TestItem from "./TestItem";

const TestList = ({tests, title, remove}) => {
    return (
        <div>
            <h1 className="title__page">
                {title}
            </h1>
            {tests.map((test, index) => 
                <TestItem remove={remove} number={index + 1} test = {test} key = {test.id}/>  
            )}
        </div>
    )
}

export default TestList;