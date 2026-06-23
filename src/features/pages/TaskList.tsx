import { Task, type TaskDataType } from "../tasks/components/task";
import { useEffect, useState } from "react";

export function TaskList() {
  const [tasks, setTasks] = useState<TaskDataType | null>(null);

  useEffect(() => {
    fetch("./api/tasks", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-12">
        {tasks?.map((task: TaskDataType) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
