import React from 'react';
import { getSkillsList } from '@/app/_libs/microcms';
import { PiFlowerTulip } from "react-icons/pi";

export default async function Page() {
  const data = await getSkillsList();
  return (
    <section className="p-16">
      <dl>
        {data.contents.map((article) => (
          <React.Fragment key={article.id}>
            <dt className="text-2xl font-bold flex border-b">
              {article.category}
            </dt>
              <div className="flex pt-10 pb-20 pl-10">
              {article.category !== "開発経験" ? (
                // <dd>で表示
                article.skillitemlist.map((item, index) => (
                  <React.Fragment key={index}>
                    <dd>{item.name}</dd>
                    {index < article.skillitemlist.length - 1 && <span className="mx-1">/</span>}
                  </React.Fragment>
                ))
              ) : (
                // 開発経験&強みは<li>で表示
                <ul className="flex flex-col gap-4">
                  {article.skillitemlist.map((item, index) => (
                    <React.Fragment key={index}>
                    <div className="flex gap-4">
                      <PiFlowerTulip className="mt-1 shrink-0" />
                      <li>{item.name}</li>
                    </div>
                    </React.Fragment>
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