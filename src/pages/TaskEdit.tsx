import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type TaskDataType } from "../components/task/task";

export function TaskEdit() {
  const params = useParams();
  const [task, setTask] = useState<TaskDataType | null>(null);
  const [form, setForm] = useState({
    title: "",
    memo: "",
  });

  useEffect(() => {
    fetch(`/api/tasks/${params.id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data: TaskDataType) => {
        setTask(data);
        setForm({
          title: data.title || "",
          memo: data.memo || "",
        });
      });
  }, [params.id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>編集フォーム</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-12">
          <div className="col-span-2 m-3">
            <label>タイトル</label>
          </div>
          <div className="col-span-10 m-3">
            <input
              type="text"
              name="title"
              value={form.title}
              className="border-3 border-solid"
              onChange={handleForm}
            />
          </div>
          <div className="col-span-2 m-3">
            <label>メモ</label>
          </div>
          <div className="col-span-10 m-3">
            <textarea
              name="memo"
              value={form.memo}
              className="border-3 border-solid"
              onChange={handleForm}
            />
          </div>
        </div>
      </form>
    </>
  );
}
