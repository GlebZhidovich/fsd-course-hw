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
  onChangeOwner,
  ownerId,
  renderSelect,
}: {
  title: string;
  done: boolean;
  ownerId?: string;
  onChangeOwner: (ownerId: string) => void;
  onToggleDone: () => void;
  onDelete: () => void;
  renderSelect(params: SelectParams): ReactNode;
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <label>
        <input type="checkbox" checked={done} onChange={onToggleDone} />
        done
      </label>
      <button onClick={() => onDelete()}>Delete task</button>
      {renderSelect({
        userId: ownerId,
        onChangeUserId: onChangeOwner,
      })}
      <div>{title}</div>
    </div>
  );
};
