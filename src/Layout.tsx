import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header class="bg-gray-200">タスク登録アプリ</header>
      <div class="grid grid-cols-12">
        <div class="bg-gray-900 col-span-3 p-8">
          <nav>
            <ul class="space-y-4">
              <li class="text-white">
                <Link to="/">ダッシュボード</Link>
              </li>
              <li class="text-white">
                <Link to="/list">タスク一覧</Link>
              </li>
              <li class="text-white">タスク登録</li>
              <li class="text-white">設定</li>
            </ul>
          </nav>
        </div>
        <div class="col-span-9">
          <Outlet />
        </div>
      </div>
      <footer class="bg-gray-200">
        <p>https://github.com/gitsoga/kanban</p>
      </footer>
    </>
  );
};

export default Layout;
