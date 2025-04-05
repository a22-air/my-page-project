"use client";
import { useState } from "react";

const projects = [
  {
    id: "weather",
    title: "🌤 天気アプリ",
    description: "現在地の天気情報をリアルタイムに取得できるiOSアプリ。",
    tech: ["Swift", "UIKit", "OpenWeatherMap API"],
  },
  {
    id: "todo",
    title: "📝 ToDoアプリ",
    description: "タスク管理ができるシンプルなiOSアプリ。",
    tech: ["Swift", "SwiftUI", "RealmSwift"],
  },
  {
    id: "job",
    title: "💼 現在の仕事",
    description: "ドライブレコーダーアプリの保守・調査を担当。",
    tech: ["Swift", "調査・試験", "障害対応"],
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("weather");

  return (
    <section className="p-16 bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">📌 プロジェクト</h2>
      <div className="flex space-x-4 border-b pb-2">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`px-4 py-2 ${activeTab === project.id ? "border-b-4 border-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveTab(project.id)}
          >
            {project.title}
          </button>
        ))}
      </div>

      {projects.map(
        (project) =>
          activeTab === project.id && (
            <div key={project.id} className="mt-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <ul className="mt-2 text-gray-600">
                {project.tech.map((tech) => (
                  <li key={tech}>✅ {tech}</li>
                ))}
              </ul>
            </div>
          )
      )}
    </section>
  );
}

// export default function Page() {
//   return (
//     <section className="p-16 bg-white text-black">
//     <h2 className="text-3xl font-bold text-gray-800">🌤 天気アプリ</h2>
//     <p className="text-gray-700 mt-2">
//         天気APIを活用し、現在地の天気情報をリアルタイムに取得できるiOSアプリを開発しました。
//     </p>
//     <ul className="mt-2 text-gray-600">
//       <li>🕒 開発期間：2024年1月〜3月</li>
//       <li>🎨 担当範囲：iOSアプリ開発</li>
//       <li>🛠 使用技術：Swift, UIKit, OpenWeatherMap API</li>
//     </ul>
//     <h3 className="text-2xl font-bold text-gray-800 mt-6">⚙️ 主な機能</h3>
//     <ul className="list-disc list-inside text-gray-700 mt-2">
//       <li>ユーザーの現在地を取得し、天気情報をリアルタイム表示</li>
//       <li>OpenWeatherMap API を使用し、天気データを取得</li>
//       <li>検索機能を実装し、指定した都市の天気を表示</li>
//       <li>UI をシンプルで見やすいデザインに設計（UIKit 使用）</li>
//     </ul>
//     <h3 className="text-2xl font-bold text-gray-800 mt-6">💡 技術的な工夫 & 挑戦</h3>
//     <p className="text-gray-700 mt-2">
//       API通信を非同期処理（async/await）で実装し、スムーズなデータ取得を実現しました。
//       また、エラーハンドリングを強化し、通信エラー時に適切なメッセージを表示するよう工夫しました。
//     </p>
//     <h3 className="text-2xl font-bold text-gray-800 mt-6">🖼️ アプリの画面</h3>
//     {/* <Image src="/weather-app.png" alt="天気アプリのスクリーンショット" width={800} height={400} className="mt-4 rounded-lg shadow-lg" /> */}
//     <h3 className="text-2xl font-bold text-gray-800 mt-6">🔗 リンク</h3>
//     <ul className="text-blue-600 underline mt-2">
//       <li><a href="https://github.com/airi-sawada/weather-app" target="_blank">GitHub リポジトリ</a></li>
//       <li><a href="https://weather-app-demo.com" target="_blank">デモサイト</a></li>
//     </ul>
//     </section>
//   );
// }