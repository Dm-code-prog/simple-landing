import React from 'react'

export default function TransferCards({ textArray }) {
  const card = (headerText, pText) => {
    return (
      <div className='transfer-card'>
        <div className='item'>
          <h4 className='header'>{headerText}</h4>
          <p className='text'>{pText}</p>
        </div>
      </div>
    )
  }

  return textArray.map((textObject) => card(textObject.header, textObject.p))
}
