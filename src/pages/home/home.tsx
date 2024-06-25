"use client";

import { IPost } from "@/common/models/post";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";

const Home = () => {
  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Blog Posts</h1>
      </div>
      <ul>
        {post.map((post: IPost) => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
