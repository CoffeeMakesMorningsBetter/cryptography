import React, { Component } from 'react';
import { WordMapItem } from './WordMapItem'
import '../../styles/vignereCipher/WordMapGrid.css'

class WordMapGrid extends Component {
  render() {
    const { position, wordMapGrid} = this.props
    let wordMap = wordMapGrid.map((obj, idx) => <WordMapItem 
    key={idx}
    idx={idx}
    position={position}
    letter={obj.letter}
    idxValue={obj.idxValue}
    /> )
    return (
      <div className="parent-grid">{wordMap}</div>
    )
  }
}

export default WordMapGrid