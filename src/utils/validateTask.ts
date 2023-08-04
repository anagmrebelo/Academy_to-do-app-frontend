import { IAddTask } from "../interfaces/IAddTask";

function validateTask(oneTask: IAddTask): boolean {
  if (oneTask.value === "") {
    console.log("Got here!");
    alert("Type a description for your task");
    return false;
  } else if (oneTask.dueDate === "") {
    alert("Choose a due date for your task");
    return false;
  }
  return true;
}

export { validateTask };
