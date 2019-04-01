import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateMemeForm from './CreateMemeForm';
import Meme from './Meme';

// import './Memes.css'

class Memes extends Component {

    constructor(props) {
        super(props)
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
    }

    add(memeObj) {
        this.props.dispatch({
            type: 'ADD_MEME',
            payload: memeObj
        })
    }
    remove(id) {
        this.props.dispatch({
            type: 'REMOVE_MEME',
            payload: id
        })
    }

    render() {
        const Memes = this.props.memes.map(m => <Meme key={m.id}
            meme={m}
            triggerRemove={this.remove}
        />)
        return (
            <div className="Memes">
                <CreateMemeForm triggerAdd={this.add} />
                {Memes}
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return { memes: reduxState.memes };
}

export default connect(mapStateToProps)(Memes);