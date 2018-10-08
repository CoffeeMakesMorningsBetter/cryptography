import React from 'react';
import '../../styles/vignereCipher/CipherDisplay.css'

export const CipherDisplay = ({ topValue, bottomValue, reset}) => (
  <div className="cipher-display-parent">
    <div className="cipher-display-child input-look">{topValue}</div>
    <button onClick={reset}>Clear</button>
    <div className="cipher-display-child input-look">{bottomValue}</div>  
  </div>
)

