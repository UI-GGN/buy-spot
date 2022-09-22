import  "./Alert.css";
import css from "classnames";
import React from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Alert({children,  message }) {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={css(Alert.alert, Alert.type, !isShow && Alert.hide)}>
      <span className={Alert.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}