import React from 'react'
import styles from './modal.module.css'

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
  const [isOpen, setIsOpen] = React.useState(false)

  React.useImperativeHandle(actionSheetRef, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }))

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={closeAllowed ? () => setIsOpen(false) : undefined}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {separator ? <hr className={styles.separator} /> : null}
        <h4 className={separator ? styles.header : styles.headerWithoutSeparator}>{headerContent}</h4>
        <span className={styles.description}>{descriptionContent}</span>
        <div className={styles.buttonContainer}>{buttonsJSX}</div>
        {footerJSX ? <div className={styles.footer}>{footerJSX}</div> : null}
      </div>
    </div>
  )
}
