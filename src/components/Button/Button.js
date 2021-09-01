import styles from "./Button.module.css";
import cn from "classnames";

const Button = (props) => {
  const { children, loading = false, disabled = false, ...rest } = props;
  const rootClassName = cn(styles.root, { [styles.disabled]: disabled });

  return (
    <button disabled={disabled} className={rootClassName} {...rest}>
      {loading ? "loading" : children}
    </button>
  );
};

export default Button;
