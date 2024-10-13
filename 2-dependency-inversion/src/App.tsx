import { TasksList } from "./tasks/ui/tasks-list";
import { saveToStorage, getFromStorage } from "./lib/storage";
import { UserSelect, UserSelectProps } from "./user/ui/user-select";

export function App() {
  const renderSelect = (params: UserSelectProps) => <UserSelect {...params} />;

  return (
    <>
      <TasksList renderSelect={renderSelect} />
    </>
  );
}
