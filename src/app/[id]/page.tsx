import PostPageDetail from "@/pages/postPageDetail/postPageDetail";

export default function Index({ params }: { params: { id: string } }) {
  return <PostPageDetail id={params.id} />;
}
