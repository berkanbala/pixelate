// "use client";
import React from "react";
import styles from "./home.module.scss";
import Post from "@/common/components/layout/ui/post/post";

const Home = ({ data }: any) => {
  if (data?.length < 1) return <div>...loading</div>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Blog Posts</h2>
        {data?.map((item: any, index: any) => (
          <Post className={styles.post} key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
