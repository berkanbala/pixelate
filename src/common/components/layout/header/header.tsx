import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "@/common/media/logo/logo.svg";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image alt="logo" src={Logo} />
      </div>
      <div className={styles.pages}>
        <ul>
          <li>
            <Link className={styles.link} href="/">
              home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/postpage">
              post
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <ul>
          <li>
            <Link className={styles.link} href="/login">
              login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
