"use client";
import styles from "./postDetail.module.scss";
import { IPost } from "@/common/models/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetail({ data }: any) {
  const params = useParams<{ id: string }>();
  const [posts, setPosts] = useState<IPost>({} as IPost);

  console.log(data);

  return (
    <div className={styles.container}>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <div>{params?.id}</div>
    </div>
  );
}
