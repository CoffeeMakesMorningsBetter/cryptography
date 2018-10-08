import React, { Component } from 'react';
import InputForm from './InputForm';
import WordMapGrid from './WordMapGrid';
import CipherGrid from './CipherGrid';
import { CipherDisplay } from './CipherDisplay';
import { mapWordsToIndex, createAlphabet } from '../../helperMethods/helperVignere';

const init = createAlphabet();

class VignereCipher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      wordMapValues: [],
      position: null,
      vignereCipherGrid: init,
      topValue: "",
      bottomValue: ""
    }
    this.addWord = this.addWord.bind(this);
    this.updatePoisition = this.updatePoisition.bind(this);
    this.reset = this.reset.bind(this);
  }

  addWord(obj) {
    console.log(obj)
    let state = {...this.state};
    state.word = obj.word;
    state.position = 0;
    state.wordMapValues = mapWordsToIndex(state.word);
    state.vignereCipherGrid = createAlphabet(state.wordMapValues[state.position].idxValue);
    state.topValue = "";
    state.bottomValue = "";
    this.setState({...state});
  };

  updatePoisition(obj) {
    console.log(obj)
    let state = {...this.state};
    state.position = state.position < state.wordMapValues.length - 1 ? state.position += 1: 0;
    console.log(state.position)
    state.vignereCipherGrid = createAlphabet(state.wordMapValues[state.position].idxValue);
    state.topValue += obj.topValue;
    state.bottomValue += obj.bottomValue;
    this.setState({...state});
  };

  reset() {
    this.setState({
      word: "",
      wordMapValues: [],
      position: null,
      vignereCipherGrid: init,
      topValue: "",
      bottomValue: ""      
    })
  };

  render() {
    const { wordMapValues, position, vignereCipherGrid, topValue, bottomValue } = this.state
    return(
      <div>
        <InputForm addWord={this.addWord}/>
        {wordMapValues.length > 0 && <WordMapGrid position={position} wordMapGrid={wordMapValues}/>}
        <CipherGrid updatePoisition={this.updatePoisition} vignereCipherGrid={vignereCipherGrid} position={position}/>
        <CipherDisplay topValue={topValue} bottomValue={bottomValue} reset={this.reset}/>
      </div>
    )
  }
}

export default VignereCipher