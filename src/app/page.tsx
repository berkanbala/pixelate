import directus from "@/lib/directus";
import Home from "@/pages/home/home";
import { readItems } from "@directus/sdk";

async function getGlobals() {
  return directus.request(readItems("posts"));
}

export default async function Index() {
  const global: any = await getGlobals();

  return <Home data={global} />;
}
