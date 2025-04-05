// "use client";
import React from 'react';
import { getSkillsList } from '@/app/_libs/microcms';
import { Desktop, RocketLaunch, PencilRuler, PersonArmsSpread } from "@phosphor-icons/react";

export default async function Page() {
  const data = await getSkillsList();
  return (
    <section className="p-16 bg-white text-black">
      <dl>
        {data.contents.map((article) => (
          <React.Fragment key={article.id}>
            <dt className="text-2xl font-bold text-gray-800 mb-2 flex">
               {/* アイコンを読み込むと遅いので後で修正 */}
            {/* <span className="pr-2"><Desktop size={32} color="#0d0c0d" /></span> */}
              {article.category}
            </dt>
              <div className="flex mb-6">
              {article.category !== "開発経験 & 強み" ? (
                // <dd>で表示
                article.skillitemlist.map((item, index) => (
                  <React.Fragment key={index}>
                    <dd>{item.name}</dd>
                    {index < article.skillitemlist.length - 1 && <span className="mx-1">/</span>}
                  </React.Fragment>
                ))
              ) : (
                // 開発経験&強みは<li>で表示
                <ul>
                  {article.skillitemlist.map((item, index) => (
                    <li key={index}>・{item.name}</li>
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