import React from 'react';
import '../../styles/vignereCipher/CipherGridItem.css'

export const CipherGridItem = ({ position, name, encoded, updatePoisition }) => (
  <div className="cipher-grid-item">
    <div className="cipher-grid-item-top">
      <button disabled={position === null? true: false} onClick={() => updatePoisition({topValue: name, bottomValue: encoded})}>{name}</button>
    </div>
    <div className="cipher-grid-item-bottom">{encoded}</div>
  </div>
)