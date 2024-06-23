import Link from "next/link";
import styles from "./header.module.scss";
import { navbarList } from "../../../shared/header/navbar";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pages}>
        {navbarList.map((item: any) => (
          <Link href={item.path} key={item.id} className={styles.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
