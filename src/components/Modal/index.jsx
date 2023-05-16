import ActionSheet from "actionsheet-react";
import React from "react";
import styles from "./modal.module.css";

const sheetStyle = { backgroundColor: "#ffffff00" };

export const Modal = ({
  actionSheetRef,
  separator = false,
  headerContent,
  descriptionContent,
  buttonsJSX,
  footerJSX,
  closeAllowed = true,
  ...props
}) => {
  return (
    <ActionSheet mouseEnable={closeAllowed} touchEnable={closeAllowed} closeOnBgTap={closeAllowed} {...props} sheetStyle={sheetStyle} ref={actionSheetRef}>
      <div className={styles.modalContainer}>
        {separator ? <hr className={styles.separator} /> : null}
        <h4 className={separator ? styles.header : styles.headerWithoutSeparator}>{headerContent}</h4>
        <span className={styles.description}>{descriptionContent}</span>
        <div className={styles.buttonContainer}>
            {buttonsJSX}
        </div>
        {footerJSX ? <div className={styles.footer}>{footerJSX}</div> : null}
      </div>
    </ActionSheet>
  );
};
