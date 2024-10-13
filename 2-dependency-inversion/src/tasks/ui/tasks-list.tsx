import { TaskItem, SelectParams } from "./task-item";
import { useTasks, TasksService } from "../model/use-tasks";
import { CreateTaskForm } from "./create-task-from";
import { ReactNode } from "react";

type TasksListProps = {
  renderSelect(params: SelectParams): ReactNode;
  tasksService: TasksService;
};

export function TasksList({ renderSelect, tasksService }: TasksListProps) {
  const { addTask, removeTask, tasks, toggleCheckTask, updateOwner } = useTasks(
    { tasksService }
  );

  return (
    <div>
      <CreateTaskForm onCreate={addTask} />
      {tasks.map((task) => (
        <TaskItem
          select={renderSelect({
            userId: task.ownerId,
            onChangeUserId: (ownerId) => updateOwner(task.id, ownerId),
          })}
          key={task.id}
          done={task.done}
          title={task.title}
          onToggleDone={() => toggleCheckTask(task.id)}
          onDelete={() => removeTask(task.id)}
        />
      ))}
    </div>
  );
}
