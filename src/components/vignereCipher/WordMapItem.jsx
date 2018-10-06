import React from 'react'
import '../../styles/vignereCipher/WordMapItem.css'

export const WordMapItem = ({ idx, position, letter, idxValue }) => (
  <div className={(idx === position ? "grid-item-parent current": "grid-item-parent")}>
    <div className="grid-item-top">{letter}</div>
    <div className="grid-item-bottom">{idxValue}</div> 
  </div>
)