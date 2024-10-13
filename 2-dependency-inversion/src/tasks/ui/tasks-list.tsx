import { TaskItem, SelectParams } from "./task-item";
import { useTasks } from "../model/use-tasks";
import { CreateTaskForm } from "./create-task-from";
import { ReactNode } from "react";

type TasksListProps = {
  renderSelect(params: SelectParams): ReactNode;
};

export function TasksList({ renderSelect }: TasksListProps) {
  const { addTask, removeTask, tasks, toggleCheckTask, updateOwner } =
    useTasks();

  return (
    <div>
      <CreateTaskForm onCreate={addTask} />
      {tasks.map((task) => (
        <TaskItem
          renderSelect={renderSelect}
          key={task.id}
          done={task.done}
          title={task.title}
          ownerId={task.ownerId}
          onToggleDone={() => toggleCheckTask(task.id)}
          onDelete={() => removeTask(task.id)}
          onChangeOwner={(ownerId) => updateOwner(task.id, ownerId)}
        />
      ))}
    </div>
  );
}
