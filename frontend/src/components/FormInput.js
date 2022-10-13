import React, { useState } from "react";

const FormInput = (props) => {
  const { label, onChange, id, type, iconShow, errorMessage, ...inputProps } =
    props;

  const [tgPassword, setTgPassword] = useState(true);
  const [focused, setfocused] = useState(false);

  const handleFocused = (e) => {
    setfocused(true);
  };

  return (
    <div className="txt-field">
      <input
        {...inputProps}
        onChange={onChange}
        type={iconShow ? (tgPassword ? "password" : "text") : type}
        onBlur={handleFocused}
        focused={focused.toString()}
      />
      <label className={inputProps.value ? "active" : ""}>{label}</label>
      <span>{errorMessage}</span>

      {type === "password" && (
        <div className="icon" onClick={() => setTgPassword(!tgPassword)}>
          {tgPassword ? (
            <i class="fa-regular fa-eye-slash"></i>
          ) : (
            <i class="fa-regular fa-eye"></i>
          )}
        </div>
      )}
    </div>
  );
};

export default FormInput;
