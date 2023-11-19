import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

function Assignment4 () {
  function sayHello() {
    alert("Hello");
  }
 return(
   <div>
     <h1>Assignment 4</h1>
     <ReduxExamples />
     <Add a={1} b={2} />
     <ClickEvent />
     <PassingDataOnEvent />
     <PassingFunctions theFunction={sayHello} />
     <Counter />
     <BooleanStateVariables />
     <StringStateVariables />
     <DateStateVariable />
     <ObjectStateVariable />
     <ArrayStateVariable />
     <ParentStateComponent />
   </div>
 );
};
export default Assignment4;