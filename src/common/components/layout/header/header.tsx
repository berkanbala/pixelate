"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "@/common/media/logo/logo.svg";
import classNames from "classnames";
import { useAppContext } from "@/common/context/appContext";

export const Header = (props: Props) => {
  const { className } = props;
  const { modals, user } = useAppContext();

  const handleModal = () =>
    modals.setSigninModalVisible(!modals.signinModalVisible);

  const handleExit = () => {
    user.setAuth(false);
    user.setUsers("");
    user.setPass("");
  };

  return (
    <div className={classNames(className, styles.container)}>
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
          <ul className={styles.itemx} style={{ marginRight: "40px" }}>
            {user.auth ? (
              <li className={styles.dropdown}>
                <div className={styles.dropbtn}>{user.users}</div>
                <div className={styles.dropdowncontent}>
                  <span onClick={handleExit}>logout</span>
                </div>
              </li>
            ) : (
              <li className={styles.dropdown}>
                <div className={styles.dropbtnx} onClick={handleModal}>
                  login
                </div>
              </li>
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
};

interface Props {
  className: string;
}
