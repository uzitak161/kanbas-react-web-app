import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
    </div>
  );
};

export default ReduxExamples;