import { TasksList } from "./tasks/ui/tasks-list";
import { TasksService } from "./lib/TasksService";
import { UserSelect, UserSelectProps } from "./user/ui/user-select";

export function App() {
  const renderSelect = (params: UserSelectProps) => <UserSelect {...params} />;

  return (
    <>
      <TasksList tasksService={TasksService} renderSelect={renderSelect} />
    </>
  );
}
