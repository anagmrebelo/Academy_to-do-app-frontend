import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";
import { AddTask } from "./AddTask";
import { Task } from "./Task";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

interface TaskListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  currUser: IUser | undefined;
  toast: any;
}

function TaskList({
  tasks,
  setTasks,
  currUser,
  toast,
}: TaskListProps): JSX.Element {
  const taskList = tasks.map((oneTask) => (
    <Task
      key={oneTask.id}
      oneTask={oneTask}
      setTasks={setTasks}
      currUser={currUser}
      toast={toast}
    />
  ));
  return (
    <>
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Description</Th>
              <Th>Due Date</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <AddTask setTasks={setTasks} currUser={currUser} toast={toast} />
            {taskList}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export { TaskList };
