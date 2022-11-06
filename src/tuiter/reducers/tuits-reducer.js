import { createSlice } from "@reduxjs/toolkit";
import posts from '../tuits/tuits.json';

const initialState = {
    tuits: posts
}

const tuitsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'like-tuit':
            return ({
                tuits: state.tuits.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                })
            });

        case 'delete-tuit':
            return ({
                tuits: state.tuits.filter(tuit => tuit._id !== action.tuit._id)
            })

        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Jose Annunziato",
                "verified": false,
                "handle": "jannunzi",
                "time": "now",
                ...action.tuit,
                "avatar-image": "./images/avatar.png",
                "logo": "./images/tesla1.jpg",
                "stats": {
                    "comments": 0,
                    "retweets": 0,
                    "likes": 0,
                },
            };
            return ({
                tuits: [
                    tuit,
                    ...state.tuits,
                ]
            });

        default:
            return (state);
    }
};

export default tuitsReducer;