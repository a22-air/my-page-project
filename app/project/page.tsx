"use client";
import { useState } from "react";

const projects = [
  {
    id: "weather",
    title: "天気アプリ",
    description: "都道府県の天気情報をリアルタイムに取得できるiOSアプリ。",
    tech: ["Swift", "Storyboard", "OpenWeatherMap API", "Realm Swift"],
    slide: "/slides/weather_app.pdf",
    git: "https://github.com/a22-air/weather-app-swift",
    movie: "https://youtube.com/shorts/r9Twrn5rgJs?feature=share",
  },
  {
    id: "todo",
    title: "ToDoアプリ",
    description: "タスク管理ができるシンプルなiOSアプリ。",
    tech: ["React", "ReactNative","TypeScript"],
    slide: "/slides/todolist_app.pdf",
    git: "https://github.com/a22-air/my-todolist-project",
    movie: "https://youtu.be/i1KVkIGmQzc"
  },
  {
    id: "job",
    title: "現在の仕事",
    description: "ドライブレコーダーアプリの保守・調査を担当。",
    tech: ["Swift", "調査・試験"],
    slide: "",
    git: "",
    movie: "",
  },
  {
    id: "past work",
    title: "過去の仕事",
    description: "Webサイトの改修",
    tech: ["JavaScript","jQuery"],
    slide: "",
    git: "",
    movie: "",
  }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("weather");

  return (
    <section className="p-16 bg-white text-black">
      <div>
        <h2 className="text-3xl font-bold mb-4">プロジェクト</h2>
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
      </div>

      {projects.map(
        (project) =>
          activeTab === project.id && (
            <div className="flex">

              <div key={project.id} className="w-1/2 mt-4">
                <h3 className="text-2xl font-bold border-b">{project.title}</h3>
                <p className="text-gray-700 p-5">{project.description}</p>
                <ul className="mt-2 text-gray-600 pl-6 space-y-4">
                  {project.tech.map((tech) => (
                  <li key={tech}>・ {tech}</li>
                ))}
                </ul>
              </div>
              
              {project.slide !== "" && (
                <div className="w-1/2">
                  <h3 className="text-2xl font-bold border-b mt-4">Check</h3>
                  <div className="flex flex-col border-l space-y-6 p-4">
                    <a
                      href={project.slide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-fit">
                      スライドを見る
                    </a>
                    <a 
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded text-center w-fit">
                      GitHubでコードを見る
                    </a>
                    <a
                      href={project.movie}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center w-fit">
                      YouTubeで動画を見る
                    </a>
                  </div>
                </div>
                
              )}
            </div>
          )
      )}
      
    </section>
  );
}
