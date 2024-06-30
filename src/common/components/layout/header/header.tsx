"use client";
import Link from "next/link";
import Logo from "@/common/assets/media/logo/logo.svg";
import Image from "next/image";
import styles from "./header.module.scss";
import classNames from "classnames";
import { notify } from "@/common/configs/notify";
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

    notify("success", "başarılı bir şekilde çıkış yapıldı", {
      position: "top-right",
    });
  };

  return (
    <div className={classNames(className, styles.container)}>
      <Link href="/">
        <Image alt="logo" src={Logo} />
      </Link>
      <div className={styles.pages}>
        <ul>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <ul className={styles.itemx} style={{ marginRight: "40px" }}>
            {user.auth ? (
              <li className={styles.dropdown}>
                <div className={styles.dropbtn}>{user.users}</div>
                <div className={styles.dropdowncontent}>
                  <span onClick={handleExit}>Logout</span>
                </div>
              </li>
            ) : (
              <li className={styles.dropdown}>
                <div className={styles.dropbtnx} onClick={handleModal}>
                  Login
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
