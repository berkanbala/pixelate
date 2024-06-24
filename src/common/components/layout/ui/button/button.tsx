import styles from "./button.module.scss";

export const Button = (props: Props) => {
  const { type, onClick, className, text, disabled } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

interface Props {
  type?: any;
  onClick?: any;
  className?: string;
  text?: any;
  disabled?: any;
}
