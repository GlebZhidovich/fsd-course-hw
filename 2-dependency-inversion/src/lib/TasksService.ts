import { saveToStorage, getFromStorage } from "./storage";

type Task = {
  id: string;
  title: string;
  done: boolean;
  ownerId?: string;
};

const STORAGE_KEY = "tasks";

export const TasksService = {
  saveTasks: (tasks: Task[]) => saveToStorage(STORAGE_KEY, tasks),
  getTasks: () => getFromStorage(STORAGE_KEY, []),
};
