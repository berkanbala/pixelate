import directus from "@/lib/directus";
// import Home from "@/custom/pages/home/home";
import { readItems } from "@directus/sdk";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("../custom/pages/home/home"));

async function getGlobals() {
  return directus.request(readItems("posts"));
}

export default async function Index() {
  const global: any = await getGlobals();

  return <Home data={global} />;
}
