import Link from "next/link";
import Image from "next/image";
import styles from "./post.module.scss";
import classNames from "classnames";

export default function Post({ item, className }: any) {
  return (
    <Link
      href={item.id.toString()}
      className={classNames(styles.container, className)}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_APP_ASSETS_URL}${item.post_image}`}
        alt="postImage"
        width={400}
        height={200}
      />
      <div className={styles.content}>
        <div className={styles.title}>{item?.title}</div>
        <div className={styles.description}>{item?.content}</div>
        <div className={styles.date}>{item?.date_created}</div>
      </div>
    </Link>
  );
}
