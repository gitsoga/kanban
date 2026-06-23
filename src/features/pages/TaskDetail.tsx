import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type TaskDataType } from "../tasks/components/task";

export function TaskDetail() {
  const params = useParams();
  const [task, setTask] = useState<TaskDataType | null>(null);

  useEffect(() => {
    fetch(`/api/tasks/${params.id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [params.id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className={`col-span-2 m-2 ${task.priority == "高" ? "bg-red-200" : task.priority == "中" ? "bg-yellow-200" : "bg-gray-200"}`}
      >
        <div>{task.title}</div>
        <div>{task.priority}</div>
        <div>{task.deadline}</div>
        <div>{task.memo}</div>
      </div>
    </>
  );
}
