"use client";

import { IPost } from "@/common/models/post";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [post, setPost] = useState<IPost[]>([]);

  // const navigate = useNavigate();
  // const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        // console.log(data);
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleClick = (id: number) => router.push(`post/${id}`);

  return (
    <div>
      <h1>Blog Posts</h1>
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
