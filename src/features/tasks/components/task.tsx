import { Link } from "react-router-dom";

export type TaskDataType = {
  id: number;
  title: string;
  deadline: string;
  priority: string;
  status: string;
  memo: string;
};

type TaskProps = {
  task: TaskDataType;
};

export function Task({ task }: TaskProps) {
  return (
    <Link to={`/tasks/${task.id}`}>
      <div
        className={`col-span-2 m-2 ${task.priority == "高" ? "bg-red-200" : task.priority == "中" ? "bg-yellow-200" : "bg-gray-200"}`}
      >
        <div>{task.title}</div>
        <div>{task.priority}</div>
        <div>{task.deadline}</div>
      </div>
    </Link>
  );
}
