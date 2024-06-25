"use client";

import React from "react";
import styles from "./home.module.scss";

const Home = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Blog Posts</h1>
        <div>{data[0].user_created}</div>
        <div>{data[0].password}</div>
        <div>{data[0].email}</div>
        <div>{data[0].date_created}</div>
        <div>{data[0].status}</div>
        <div>{data[0].id}</div>
        <div>{data[0].sort}</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          vitae earum nam rerum totam? Unde, cum veritatis dolorem ipsum aut
          officia molestiae quod illo similique veniam repellendus. Dignissimos,
          esse dolor?
        </div>
      </div>
    </div>
  );
};

export default Home;
