import React, { Component } from 'react';
import { connect } from 'react-redux';
// import CreateMemeForm from './CreateMemeForm';
import Meme from './Meme';

// import './Memes.css'

class Memes extends Component {
    
    constructor(props){
        super(props)
        this.remove = this.remove.bind(this);
    }

    remove(id){
        this.props.dispatch({   type: 'REMOVE', 
                                payload: id
                            })
    }

    render() {
        const Memes = this.props.memes.map(m => <Meme   key={m.id} 
                                                        meme={m}  
                                                        triggerRemove={this.remove} 
                                                        />)
        return (
        <div className="Memes">
        {/* <CreateMemeForm /> */}
        {Memes} 
        </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return { memes: reduxState.memes };
  }

export default connect(mapStateToProps)(Memes);