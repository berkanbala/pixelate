import classNames from "classnames";
import styles from "./button.module.scss";

export const Button = (props: any) => {
  const { type, onClick, className, text, disabled } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.container, className)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
