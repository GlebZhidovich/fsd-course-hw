import { ReactNode } from "react";

export type SelectParams = {
  userId?: string;
  onChangeUserId: (ownerId: string) => void;
};

export const TaskItem = ({
  title,
  done,
  onDelete,
  onToggleDone,
  select,
}: {
  title: string;
  done: boolean;
  onToggleDone: () => void;
  onDelete: () => void;
  select: ReactNode;
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <label>
        <input type="checkbox" checked={done} onChange={onToggleDone} />
        done
      </label>
      <button onClick={() => onDelete()}>Delete task</button>
      {select}
      <div>{title}</div>
    </div>
  );
};
