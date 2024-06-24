import styles from "./input.module.scss";

export const Input = (props: Props) => {
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
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          readOnly={readOnly}
          required={required}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          className={className}
        />
      </div>
    </div>
  );
};

interface Props {
  readOnly?: boolean;
  required?: any;
  name?: string;
  type: string;
  value?: any;
  disabled?: boolean;
  className?: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
