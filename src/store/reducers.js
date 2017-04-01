// manipulate data found in the state
// == pure functions that are designed to manage a small part of the state object

export const tweets = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TWEET':
            console.log('helllooooo');
            console.log('ADD_TWEET state', state);
            const newState = [...state, action.payload];
            return newState;
        default: 
            console.log('default');
            return state;    
    }
}
