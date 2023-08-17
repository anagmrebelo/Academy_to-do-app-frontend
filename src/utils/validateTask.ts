import { IAddTask } from "../interfaces/IAddTask";

function validateTask(oneTask: IAddTask, toast: any): boolean {
  if (oneTask.value === "") {
    toast({
      title: "Type a description for your task",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    return false;
  } else if (oneTask.due_date === "") {
    toast({
      title: "Choose a due date for your task",
      status: "warning",
      duration: 9000,
      isClosable: true,
    });
    return false;
  }
  return true;
}

export { validateTask };
