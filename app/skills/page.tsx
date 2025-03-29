"use client";
import { Desktop, RocketLaunch, PencilRuler, PersonArmsSpread } from "@phosphor-icons/react";

export default function Page() {
  return (
    <div className="p-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Skills</h1>

      {/* プログラミング言語 */}
      <div className="mb-6 text-1xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex"><span className="pr-2"><Desktop size={32} color="#0d0c0d" /></span>プログラミング言語</h2>
        <p className="text-gray-700">Swift / JavaScript / TypeScript / Java </p>
      </div>

      {/* フレームワーク & ライブラリ */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex"><span className="pr-2"><RocketLaunch size={32} color="#0d0c0d" /></span>フレームワーク & ライブラリ</h2>
        <p className="text-gray-700">React / jQuery / TailWindCSS / SwiftUI / Next.js / Express / realm.swift</p>
      </div>

      {/* ツール & 環境 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex"><span className="pr-2"><PencilRuler size={32} color="#0d0c0d" /></span>ツール & 環境</h2>
        <p className="text-gray-700">Xcode / Git / Vercel / Visual Studio Code / RealmSwift / draw.io </p>
      </div>

      {/* 開発経験 & 強み */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex"><span className="pr-2"><PersonArmsSpread size={32} color="#0d0c0d" /></span>開発経験 & 強み</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>iOSアプリの保守経験（Swift）</li>
          <li>Webページの保守経験（JavaScript）</li>
          <li>APIデータを取得した天気アプリの開発（Swift） </li>
          <li>Todoアプリの開発（React）</li>
          <li>Next.js を用いたポートフォリオサイトの構築</li>
        </ul>
      </div>
    </div>
  );
}