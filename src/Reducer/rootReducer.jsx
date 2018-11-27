import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { PostReducer } from './PostReducer';
import { firebaseReducer } from 'react-redux-firebase';

export const initState = {
    data : [
        {
            username: "philzcoffee",
            thumbnailUrl:  'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg',
            imageUrl: 'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&h=350',
            likes: 400,
            timestamp: "Tue Nov 27 2018 08:54:12 GMT+0530",
            comments: [
                {
                    username: "philzcoffee",
                    text: "We've got more than just delicious coffees to offer at our shops!"
                },
                {
                    username: "biancasaurus",
                    text: "Looks delicious!"
                },
                {
                    username: "martinseludo",
                    text: "Can't wait to try it!"
                }
            ]
        },
        {
            username: "twitch",
            thumbnailUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/madcitygg-profile_image-d182e6f9183999a2-300x300.jpeg',
            imageUrl: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d08086d86a9b5b98cb37a9bccee1dbb&w=1000&q=80',
            likes: 43,
            timestamp: "Tue Nov 27 2018 11:32:12 GMT+0530",
            comments: [
                {
                    username: "twitch",
                    text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
                },
                {
                    username: "michaelmarzetta",
                    text: "Omg that match was crazy"
                },
                {
                    username: "themexican_leprechaun",
                    text: "What a setup"
                },
                {
                    username: "dennis_futbol",
                    text: "It that injustice"
                },
                {
                    username: "dennis_futbol",
                    text: "Is it not great!!!"
                }
            ]
        },
        {
            username: "playhearthstone",
            thumbnailUrl: 'data:image/jpeg;base64,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',
            imageUrl: 'https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&h=350',
            likes: 5306,
            timestamp: "Tue Nov 27 2018 10:14:12 GMT+0530",
            comments: [
                {
                    username: "playhearthstone",
                    text: "Power alone is not to be feared. Fear instead those who wield it! #FrozenThrone #Expansion #DeathKnights"
                },
                {
                    username: "tapmelon",
                    text: "Wish that death knight could be added as a new playable class in this expansion."
                },
                {
                    username: "micpetboudreau",
                    text: "Can't wait"
                },
                {
                    username: "awaywetravel",
                    text: "I <3 Hearthstone."
                },
                {
                    username: "awesomebt28",
                    text: "I like how gul'dan looks so old and useless"
                }
            ]
        }
    ]
}

export const rootReducer = combineReducers({
    auth : AuthReducer,
    posts : PostReducer,
    firebase : firebaseReducer
});