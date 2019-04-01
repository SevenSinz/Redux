import React, { Component } from 'react';

// import './Meme.css'

class Meme extends Component {

    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.triggerRemove(this.props.meme.id)
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.meme.id !== nextProps.meme.id
    }

    render() {
        const {topTxt, imgUrl, bottomTxt} = this.props.meme;
        return (
            <div className="Meme" onClick={this.clickHandler}>
                <div> { topTxt } </div>
                <img src={ imgUrl } alt=''/>
                <div> { bottomTxt } </div>
            </div>
        );
    }
}

export default Meme