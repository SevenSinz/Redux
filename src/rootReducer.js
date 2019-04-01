import uuid from 'uuid/v4';

/**
 * memes: [ { id: '',
 *            topTxt:'',
 *            bottomTxt:'',
 *            imgUrl: ''}
 *          ,  ...]
 * */

const INITIAL_STATE = {
    memes: []
};

function rootReducer(state = INITIAL_STATE, action) {
    let newMemes;

    if (action.type === "ADD_MEME") {
        let newMeme =  {...action.payload, id: uuid()};
        newMemes = [ ...state.memes, newMeme]
        // newMemes.push(action.payload);
        return { memes: newMemes };
    }

    if (action.type === "REMOVE_MEME") {
        newMemes = state.memes.filter(m => m.id !== action.payload)
        return { memes: newMemes };
    }

    return state;

}

export default rootReducer;