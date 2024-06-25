import classNames from "classnames";
import styles from "./input.module.scss";

export const Input = (props: any) => {
  const {
    type,
    className,
    disabled,
    name,
    onChange,
    readOnly,
    placeholder,
    required,
    value,
    text,
  } = props;
  return (
    <input
      readOnly={readOnly}
      required={required}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      className={classNames(styles.container, className)}
    >
      {text}
    </input>
  );
};
