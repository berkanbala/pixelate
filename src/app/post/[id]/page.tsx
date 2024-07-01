import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import dynamic from "next/dynamic";

const PostDetail = dynamic(
  () => import("@/custom/pages/postDetail/postDetail"),
  {
    ssr: false,
  }
);

async function getGlobals(id: string) {
  return directus.request(readItems(`posts/${id}`));
}
export default async function Index({ params }: { params: { id: string } }) {
  const global: any = await getGlobals(params.id);

  return <PostDetail data={global} />;
}
