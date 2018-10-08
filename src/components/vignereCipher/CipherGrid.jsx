import React, { Component } from 'react';
import { CipherGridItem } from './CipherGridItem'
import '../../styles/vignereCipher/CipherGrid.css'

class CipherGrid extends Component {
  render() {
    const { vignereCipherGrid, updatePoisition, position } = this.props
    console.log(vignereCipherGrid)
    let gridItems = vignereCipherGrid.map((obj, idx) => (
      <CipherGridItem 
        key={idx}
        idx={idx}
        name={obj.name}
        encoded={obj.encoded}
        updatePoisition={updatePoisition}
        position={position}
      />
    ))
    return(
      <div className="cipher-grid-parent">{gridItems}</div>
    )
  }
}

export default CipherGrid