import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Skills = {
  category: string;
  skillitemlist: {
    name: string;
  }[];
} & MicroCMSListContent;

export type Projects = {
  no: number,
  projectId: string,
  title: string,
  description: string,
  technologies: {
    tech: string;
  }[],
  slide: string,
  git: string,
  demoMovie: string,
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getSkillsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Skills>({
    endpoint: "skills",
    queries,
  });
  return listData;
};

export const getProjectsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Projects>({
    endpoint: "project",
    queries,
  });
  return listData;
};