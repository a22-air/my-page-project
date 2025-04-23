"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiFlowerTulip } from "react-icons/pi";

type Project = {
  projectId: string;
  no: number;
  title: string;
  description: string;
  technologies: { tech: string }[];
  slide?: string;
  git?: string;
  demoMovie?: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectTabs({ projects }: Props) {
  const [activeTab, setActiveTab] = useState(projects[0]?.projectId || "");

  return (
  <>
    <div className="pb-10">
      <div className="flex border-b pb-10">
        {projects.map((project) => (
          <button
            key={project.projectId}
            className={`flex items-center justify-center px-4 py-2 flex-1 transition-all duration-300 ${
              activeTab === project.projectId
                ? "border-b-4 border-black text-black"
                : "text-white hover:opacity-70"
          }`}
          onClick={() => setActiveTab(project.projectId)}
        >
          {project.title}
          <IoIosArrowForward className="ml-2" />
          </button>
      ))}
      </div>
    </div>

    {projects.map((project) => activeTab === project.projectId && (
      <div
        key={project.no}
        className="flex transition-all duration-500 transform ease-in-out opacity-0 translate-x-10"
        style={{animation: activeTab === project.projectId ? 'slideIn 1.5s forwards' : 'none'}}
      >
        <div key={project.projectId} className="w-1/2 border-r">
          <h3 className="text-2xl font-bold border-b pb-10 text-center">
            {project.title}
          </h3>
          <p className="p-5">{project.description}</p>
          <ul className="space-y-4 px-6">
            {project.technologies.map((techItem) => (
              <div key={techItem.tech} className="flex gap-4">
                <PiFlowerTulip className="mt-1 shrink-0" />
                <li> {techItem.tech}</li>
              </div>
              ))
            }
          </ul>
        </div> 
          
        {project.slide && (
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
                href={project.demoMovie}
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
  </>
  )}