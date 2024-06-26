import directus from "@/lib/directus";
import PostDetail from "@/pages/postDetail/postDetail";
import { readItems } from "@directus/sdk";

async function getGlobals(id: string) {
  return directus.request(readItems(`posts/${id}`));
}
export default async function Index({ params }: { params: { id: string } }) {
  const global: any = await getGlobals(params.id);

  return <PostDetail data={global} />;
}
