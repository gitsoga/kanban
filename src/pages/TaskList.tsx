import { Task, type TaskDataType } from "../components/task/task";
import { useQuery } from "@tanstack/react-query";

export function TaskList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await fetch("./api/tasks", { method: "GET" });
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json() as Promise<TaskDataType[]>;
    },
  });

  if (isLoading) return <p>読み込み中...</p>;
  if (isError) return <p>エラー: {error.message}</p>;

  return (
    <>
      <div className="grid grid-cols-12">
        {data?.map((task: TaskDataType) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
