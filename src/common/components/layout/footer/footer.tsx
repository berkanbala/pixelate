import classNames from "classnames";
import styles from "./footer.module.scss";

export default function Footer(props: Props) {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      © Copyright 2024 | Beerkaan
    </div>
  );
}
interface Props {
  className: string;
}
