import { tweets } from './store/reducers';
import state from './state.json';

const btnSend = document.querySelector('#btnSend');
const message = document.querySelector('#message');
const tweetsDiv = document.querySelector('#tweets');

let currentTweets = state.tweets || [];

btnSend.addEventListener('click', () => {
    let addTweetAction = {
        type: 'ADD_TWEET',
        payload: {
            "author": "@meanjsfr",
            "text": message.value,
            "date": new Date().toLocaleDateString(),
            "impressions": 1
        }
    };
    dispatchAction(currentTweets, addTweetAction, 'tweets');
    message.value = '';
});

const dispatchAction = (allTweets, action, stateProperty) => {    
    currentTweets = tweets(allTweets, action); 
    state['tweets'] = currentTweets;
    console.log('state', state);
    displayTweets(currentTweets);    
};

const displayTweets = (allTweets) => {
    console.log('displayTweets allTweets', allTweets);
    let allTweetsHtml = [];
    allTweetsHtml = allTweets.map( tweet => `<div><h3> ${tweet.author} , le ${tweet.date}</h3><div>${tweet.text}</div></div>`);
    tweetsDiv.innerHTML = allTweetsHtml.join('');
};


displayTweets(currentTweets);