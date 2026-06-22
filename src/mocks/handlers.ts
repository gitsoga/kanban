import { http, HttpResponse } from "msw";
import Task from "../features/tasks/components/task";

const taskData: TaskDataType[] = [
  {
    id: "1",
    title: "新規顧客向け提案資料の作成",
    deadline: "2026/06/25",
    priority: "高",
    status: "未着手",
    memo: "競合他社のプランとの比較表を含めること",
  },
  {
    id: "2",
    title: "月次売上データの集計と分析",
    deadline: "2026/06/30",
    priority: "中",
    status: "進行中",
    memo: "先月比での推移をグラフ化する",
  },
  {
    id: "3",
    title: "システム定期メンテナンスの通知",
    deadline: "2026/06/23",
    priority: "高",
    status: "完了",
    memo: "全社宛てにメールとチャットでアナウンス済み",
  },
  {
    id: "4",
    title: "新入社員向け研修用マニュアルの改訂",
    deadline: "2026/07/05",
    priority: "低",
    status: "未着手",
    memo: "リモートワークに関する規定を追記する",
  },
  {
    id: "5",
    title: "プロジェクトA 第2期キックオフ会議の調整",
    deadline: "2026/06/26",
    priority: "高",
    status: "進行中",
    memo: "外部パートナー企業の担当者も招待する",
  },
  {
    id: "6",
    title: "Webサイトのセキュリティ脆弱性診断",
    deadline: "2026/07/10",
    priority: "高",
    status: "未着手",
    memo: "外部ツールを用いたスキャンを1次実施予定",
  },
  {
    id: "7",
    title: "備品管理システムへの在庫登録",
    deadline: "2026/06/24",
    priority: "低",
    status: "完了",
    memo: "新しく購入したノートPC10台分",
  },
  {
    id: "8",
    title: "次期製品プロモーションの企画書作成",
    deadline: "2026/07/15",
    priority: "中",
    status: "進行中",
    memo: "SNSマーケティングの予算案を盛り込む",
  },
  {
    id: "9",
    title: "サーバーのSSL証明書更新作業",
    deadline: "2026/06/29",
    priority: "高",
    status: "未着手",
    memo: "夜間のメンテナンス時間帯に実施する",
  },
  {
    id: "10",
    title: "四半期評価の自己申告書提出",
    deadline: "2026/06/28",
    priority: "中",
    status: "進行中",
    memo: "今期の目標達成率を数値で記載する",
  },
];

export const handlers = [
  http.get("/api/tasks", () => {
    return HttpResponse.json(taskData, { status: 200 });
  }),
];
