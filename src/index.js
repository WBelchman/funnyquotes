import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import * as tf from '@tensorflow/tfjs'

import token_data from "./assets/tokens.json"


class Title extends React.Component {
  componentDidMount(){
    document.title = "funnyquotes"
  }
  render(){
    return null
  }
}

class Generator extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {quote: 'Click the button to generate a quote!'}

    tf.loadLayersModel("https://raw.githubusercontent.com/WBelchman/my_quote_generator/master/js_model/model.json").then(
              model => { this.model = model}
    )

    this.seq2word = this.swap(token_data)

    this.generate_quote = this.generate_quote.bind(this)
  }
  swap(dict){
    var ret = {};
    for(var key in dict){
      ret[dict[key]] = key;
    }
    return ret;
  }
  sample(probs) {
    const sum = probs.reduce((a, b) => a + b, 0)
    if (sum <= 0) throw Error('probs must sum to a value greater than zero')
    const normalized = probs.map(prob => prob / sum)
    const sample = Math.random()
    let total = 0
    for (let i = 0; i < normalized.length; i++) {
        total += normalized[i]
        if (sample < total) return i
    }
}
  generate_quote(){
    let model_input = tf.expandDims([20], 0)
    let text = []

    let pred_dist
    let pred_token
    let char

    
    for (let i = 0; i < 1000; i++){
      pred_dist = this.model.predict(model_input)
      
      pred_dist = tf.squeeze(pred_dist, 0)
      console.log(pred_dist.arraySync())
      pred_token = tf.multinomial(pred_dist, 1).arraySync()[0]
      
      model_input = tf.expandDims(pred_token, 0)

      char = this.seq2word[pred_token[0]]
      text.push(char)

      if (char === '.'){
        break
      }
      
    }

    text = text.join('')
    this.setState(state => ({quote: text}))
  }
  render(){
    return (
      <div>
        <div className='textbox'>{ this.state.quote }</div>
        <button onClick={ this.generate_quote }>Click Me</button>
      </div>
    )
  }
}

class Page extends React.Component {
  render(){
    return (
      <div className="main">
        <h2>FunnyQuotes</h2>
        <h4>Yeah we need a better title</h4>
        <Generator/>
      </div>
    )
  }
}



ReactDOM.render(<Title/>, document.getElementById('root'))
ReactDOM.render(<Page/>, document.getElementById('root'))
serviceWorker.unregister();
