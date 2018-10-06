import React, { Component } from 'react';
import InputForm from './InputForm'
import WordMapGrid from './WordMapGrid'
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
    this.addWord = this.addWord.bind(this)
  }

  addWord(obj) {
    console.log(obj)
    let state = {...this.state};
    state.word = obj.word;
    state.position = 0;
    state.wordMapValues = mapWordsToIndex(state.word);
    state.vignereCipherGrid = createAlphabet(state.wordMapValues[state.position].value);
    this.setState({...state});
  };

  updatePoisition(obj) {
    let state = {...this.state};
    state.position = state.position < state.wordMapValues.length - 1 ? state.position += 1: 0;
    state.vignereCipherGrid = createAlphabet(state.wordMapValues[state.position].value);
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
    const { wordMapValues, position} = this.state
    return(
      <div>
        <InputForm addWord={this.addWord}/>
        {wordMapValues.length > 0 && <WordMapGrid position={position} wordMapGrid={wordMapValues}/>}
      </div>
    )
  }
}

export default VignereCipher