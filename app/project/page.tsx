"use client";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiFlowerTulip } from "react-icons/pi";

const projects = [
  {
    no:"0",
    id: "weather",
    title: "Weather App",
    description: "都道府県の天気情報をリアルタイムに取得できるiOSアプリ。",
    tech: ["Swift", "Storyboard", "OpenWeatherMap API", "Realm Swift"],
    slide: "/slides/weather_app.pdf",
    git: "https://github.com/a22-air/weather-app-swift",
    movie: "https://youtube.com/shorts/r9Twrn5rgJs?feature=share",
  },
  {
    no:"1",
    id: "todo",
    title: "ToDo App",
    description: "タスク管理ができるシンプルなiOSアプリ。",
    tech: ["React", "ReactNative","TypeScript"],
    slide: "/slides/todolist_app.pdf",
    git: "https://github.com/a22-air/my-todolist-project",
    movie: "https://youtu.be/i1KVkIGmQzc"
  },
  {
    no:"2",
    id: "job",
    title: "現在の仕事",
    description: "ドライブレコーダーアプリの保守・調査を担当。",
    tech: ["Swift", "調査・試験"],
    slide: "",
    git: "",
    movie: "",
  },
  {
    no:"3",
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
    <section className="p-16">

      <div className="pb-10">
        <div className="flex border-b pb-10">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`flex items-center justify-center px-4 py-2 flex-1 transition-all duration-300 ${
                activeTab === project.id
                  ? "border-b-4 border-black text-black"
                  : "text-white hover:opacity-70"
              }`}
              onClick={() => setActiveTab(project.id)}
            >
              {project.title}
              <IoIosArrowForward className="ml-2" />
            </button>
          ))}
        </div>
      </div>

      {projects.map(
        (project) =>
          activeTab === project.id && (
            <div key={project.no} className="flex">

              <div key={project.id} className="w-1/2  border-r">
                <h3 className="text-2xl font-bold border-b pb-10 text-center">{project.title}</h3>
                <p className="p-5">{project.description}</p>
                <ul className="pl-6 space-y-4">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex gap-4">
                      <PiFlowerTulip className="mt-1 shrink-0" />
                      <li> {tech}</li>
                    </div>
                ))}
                </ul>
              </div>
              
              {project.slide !== "" && (
                <div className="w-1/2">
                  <h3 className="text-2xl font-bold border-b pb-10 text-center">Check</h3>
                  <div className="flex flex-col space-y-6 p-4">
                    <a
                      href={project.slide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-black py-2 px-4 rounded text-center w-fit">
                      スライドを見る<IoIosArrowForward />
                    </a>
                    <a 
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-black py-2 px-4 rounded text-center w-fit">
                      GitHubでコードを見る<IoIosArrowForward />
                    </a>
                    <a
                      href={project.movie}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-black py-2 px-4 rounded text-center w-fit">
                      YouTubeで動画を見る<IoIosArrowForward />
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
