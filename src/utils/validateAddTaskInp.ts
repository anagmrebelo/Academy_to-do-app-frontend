import { IAddTask } from "../interfaces/IAddTask";

function validateAddTaskInp(taskInp: IAddTask): boolean {
  if (taskInp.value === "") {
    console.log("Got here!");
    alert("Type a description for your task");
    return false;
  } else if (taskInp.dueDate === "") {
    alert("Choose a due date for your task");
    return false;
  }
  return true;
}

export { validateAddTaskInp };
