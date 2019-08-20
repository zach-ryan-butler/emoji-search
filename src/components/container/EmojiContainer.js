import React, { Component } from 'react';
import Emojis from '../emojis/Emojis';
import EmojiSearch from '../search/EmojiSearch';
import EmojisArr from '../../emojiList';

export default class EmojiContainer extends Component {
  state = {
    text: '',
    emojiArr: []
  }
  
  componentDidMount() {
    const firstTwenty = EmojisArr.slice(0, 20);
    this.setState({ emojiArr: firstTwenty });
  }
  
  textHandler = ({ target }) => {
    this.setState({ text: target.value });
  }

  componentDidUpdate(_, prevState) {
    if(prevState.text !== this.state.text) {
      const filteredEmojis = EmojisArr.filter(emoji => emoji.keywords.includes(this.state.text));
      this.setState({ emojiArr: filteredEmojis });
    }
    if(prevState.text !== this.state.text && this.state.text === '') {
      const firstTwenty = EmojisArr.slice(0, 20);
      this.setState({ emojiArr: firstTwenty });
    }
  }

  render() {
    return (
      <section>
        <EmojiSearch text={this.state.text} textHandler={this.textHandler} />
        <Emojis emojis={this.state.emojiArr}/>
      </section>
    );
  }
}
