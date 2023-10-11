import JavaScript from "./JavaScript";
import Nav from "../../Nav";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import DynamicStyling from "./DynamicStyling";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div>
      <Nav />
      <h1>Assignment 3</h1>
      <TodoList />
      <ConditionalOutput />
      {/* <Styles /> */}
      <Classes/>
      <PathParameters />
      <JavaScript />
      
      {/* <DynamicStyling /> */}
    </div>
  );
}
export default Assignment3;