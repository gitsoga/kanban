import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { routeBasic } from "./routes";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

async function enableMocking() {
  // 開発環境以外、またはSSR環境なら何もしない
  if (!import.meta.env.DEV || typeof window === "undefined") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // worker.start() が完全に完了（Resolve）するのを待つ
  return worker.start({
    onUnhandledRequest: "bypass", // 未定義のAPIはスルーする設定（エラー防止）
  });
}

// MSWの起動が「完了したあと」に React をマウントする
enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routeBasic} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  );
});
