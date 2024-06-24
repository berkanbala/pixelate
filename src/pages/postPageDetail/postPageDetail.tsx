"use client";

import { useParams } from "next/navigation";
import styles from "./postPageDetail.module.scss";
import { IPost } from "@/common/models/post";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line @next/next/no-async-client-component
export default function PostPageDetail({ id }: { id: string }) {
  //   const { id } = props;

  const [posts, setPosts] = useState<IPost>({} as IPost);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.warn(error));
  }, [id]);

  console.log(id);
  return (
    <div className={styles.container}>
      <title>{posts.title}</title>

      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </div>
  );
}