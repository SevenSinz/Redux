import React, { Component } from 'react';
// import './Meme.css'

class Meme extends Component {

    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.props.triggerRemove(this.props.meme.id)
    }
  render() {
    return (
      <div className="Meme" onClick={ this.clickHandler }>
        <div> {this.props.meme.topTxt} </div>
        <img src={this.props.meme.imgUrl} alt="Meme, don't pick on me!"/>
        <div> {this.props.meme.bottomTxt} </div> 
      </div>
    );
  }
}

export default Meme