import React from "react";
import cn from "classnames";
import styles from "./Input.module.css";

const Input = (props) => {
  const { className, onChange, ...rest } = props;

  const rootClassName = cn(styles.root, {}, className);
  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };
  return (
    <input
      className={rootClassName}
      onChange={handleOnChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
    />
  );
};

export default Input;
