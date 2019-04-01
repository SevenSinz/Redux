import React, { Component } from 'react';

// import './CreateMemeForm.css'

class CreateMemeForm extends Component {
    
    constructor(props){
        super(props)
        this.state={topTxt:'',
                    bottomTxt:'',
                    imgUrl: ''
                    }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        this.props.triggerAdd(this.state);
        this.setState({ topTxt:'',
                        bottomTxt:'',
                        imgUrl: ''})
    }

    handleChange(evt){
        this.setState({ 
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        
        return (
        
      <form onSubmit={this.handleSubmit}>
      <div>
        Add a new Meme!
          <div>
            <label htmlFor="topTxt"/>
            <input  id="topTxt" 
                    name="topTxt"
                    placeholder="topTxt"
                    value={this.state.topTxt}
                    onChange={this.handleChange} />
          </div> 

          <div>
            <label htmlFor="bottomTxt"/>
            <input  id="bottomTxt" 
                    name="bottomTxt"
                    placeholder="bottomTxt"
                    value={this.state.bottomTxt}
                    onChange={this.handleChange} />
          </div> 

          <div>
            <label htmlFor="imgUrl"/>
            <input  id="imgUrl" 
                    name="imgUrl"
                    placeholder="imgUrl"
                    value={this.state.imgUrl}
                    onChange={this.handleChange} />
          </div> 

          <button> Add Meme </button>

      </div>

        </form>
        );
    }
}

export default CreateMemeForm;