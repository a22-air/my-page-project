"use client";
import React from 'react';
import { Desktop, RocketLaunch, PencilRuler, PersonArmsSpread } from "@phosphor-icons/react";

type Skills = {
  id: string;
  title: string;
  items:string[];
}

const data: { contents: Skills[] } = {
    contents: [
      {
        id: "1",
        title: "プログラミング言語",
        items:["Swift", "JavaScript","TypeScript", "Java"],
      },
      {
        id: "2",
        title: "フレームワーク & ライブラリ",
        items:[ "React", "jQuery","TailWindCSS", "SwiftUI", "Next.js", "Express", "realm.swift" ],
      },
      {
        id: "3",
        title: "ツール & 環境",
        items:[ "Xcode", "Git", "Vercel", "Visual", "Studio Code", "RealmSwift", "draw.io" ]
      },
      {
        id: "4",
        title: "開発経験 & 強み",
        items: [ "iOSアプリの保守経験（Swift）", "Webページの保守経験（JavaScript）", "APIデータを取得した天気アプリの開発（Swift）", "Todoアプリの開発（React）", "Next.js を用いたポートフォリオサイトの構築" ]
      }
    ],
  }

export default function Page() {
  return (
    <section className="p-16 bg-white text-black">
      <dl>
        {data.contents.map((article) => (
          <React.Fragment key={article.id}>
            <dt className="text-2xl font-bold text-gray-800 mb-2 flex">
               {/* アイコンを読み込むと遅いので後で修正 */}
            {/* <span className="pr-2"><Desktop size={32} color="#0d0c0d" /></span> */}
              {article.title}
            </dt>
              <div className="flex mb-6">
              {article.id !== "4" ? (
                // <dd>で表示
                article.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <dd>{item}</dd>
                    {index < article.items.length - 1 && <span className="mx-1">/</span>}
                  </React.Fragment>
                ))
              ) : (
                // 開発経験&強みは<li>で表示
                <ul>
                  {article.items.map((item, index) => (
                    <li key={index}>・{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}