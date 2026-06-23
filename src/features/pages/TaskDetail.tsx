import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Task from "../tasks/components/task";

function TaskDetail() {
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
      <Task key={params.id} task={task} />
    </>
  );
}

export default TaskDetail;
