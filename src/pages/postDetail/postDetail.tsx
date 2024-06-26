"use client";
import { Calendar } from "lucide-react";
import styles from "./postDetail.module.scss";
import Image from "next/image";
import { formatDate, parseISO } from "date-fns";

export default function PostDetail({ data }: any) {
  return (
    <div className={styles.container}>
      <Image
        src={`${process.env.NEXT_PUBLIC_APP_ASSETS_URL}${data.post_image}`}
        alt="postImage"
        width={400}
        height={200}
      />
      <div className={styles.subtext}>
        <span className="sr-only">Date </span>
        <Calendar className={styles.icon} aria-hidden="true" />
        <div className={styles.date}>
          {formatDate(parseISO(data?.date_created!), "d.M.yyyy HH:mm:ss ")}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{data?.title}</div>
        <div className={styles.description}>{data?.content}</div>
      </div>
    </div>
  );
}
