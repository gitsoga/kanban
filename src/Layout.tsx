import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="bg-gray-200">タスク登録アプリ</header>
      <div className="grid grid-cols-12">
        <div className="bg-gray-900 col-span-3 p-8">
          <nav>
            <ul className="space-y-4">
              <li className="text-white">
                <Link to="/">ダッシュボード</Link>
              </li>
              <li className="text-white">
                <Link to="/list">タスク一覧</Link>
              </li>
              <li className="text-white">タスク登録</li>
              <li className="text-white">設定</li>
            </ul>
          </nav>
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
      <footer className="bg-gray-200">
        <p>https://github.com/gitsoga/kanban</p>
      </footer>
    </>
  );
};
