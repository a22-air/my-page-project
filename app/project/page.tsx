import { getProjectsList } from '@/app/_libs/microcms';
import ProjectTabs from "./ProjectTabs";

export default async function Page() {
  
  const projects = await getProjectsList()

  return (
    <section className="p-16">
      <ProjectTabs projects={projects.contents} />  
    </section>
  );
}