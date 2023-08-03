import { Header } from "./Header";
import { OptionsBar } from "./OptionsBar";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

function ToDosApp(): JSX.Element {
  return (
    <>
      <Header />
      <OptionsBar />
      <AddTask />
      <TaskList />
    </>
  );
}

export { ToDosApp };
