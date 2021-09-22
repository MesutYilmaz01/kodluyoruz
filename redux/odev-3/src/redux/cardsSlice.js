import { createSlice, nanoid } from "@reduxjs/toolkit";
const items = [
    {
        nano_id : nanoid(),
        id : 1,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 2,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 3,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 4,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 5,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 6,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 7,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 8,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 9,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 10,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 11,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 12,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 13,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 14,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 15,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 1,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 2,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 3,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 4,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 5,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 6,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 7,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 8,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 9,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 10,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 11,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 12,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 13,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 14,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",    
        open : false,
        match : false,
    },
    {
        nano_id : nanoid(),
        id : 15,
        img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",    
        open : false,
        match : false,
    },
]
  const randomArray = () => {
    let temp = []
    while(temp.length < 30)
    {
      let number = Math.floor(Math.random() * 30)
      if(!temp.includes(number)){
        temp.push(number)
      }
    }
    return temp
  }
  const getShuffledItems = () => {
    let temp = []
    let random1 = randomArray()
    for (let i=0; i<30; i++)
    {
      temp.push(items[random1[i]])
    }
    return temp
  }

const array = getShuffledItems()

const cardsSlice = createSlice({
    name : 'cards',
    initialState : {
        randomCards : array,
        matchArray : [],
        beforeCardNanoId: null,
        score : 0,
    },
    reducers : {
        setRandomCards : (state,action) => {
            state.randomCards = action.payload
        },
        openCard : (state, action) => {
            const item = state.randomCards.find(item => item.nano_id === action.payload)
            item.open = true
        },
        updateFromRandomCards : (state, action) => {
            const item = state.randomCards.find(item => item.nano_id === action.payload)
            if(state.beforeCardNanoId !== null ) {
                const beforeItem = state.randomCards.find(item => item.nano_id === state.beforeCardNanoId)
                if( beforeItem.id == item.id ) {
                    item.match = true;
                    beforeItem.match = true;
                    state.score += 50;
                } else {
                    item.open = false;
                    beforeItem.open = false;
                    if (state.score > 9){
                        state.score -= 10
                    }
                }
                state.beforeCardNanoId = null;
            } else {
                state.beforeCardNanoId = item.nano_id;
                
            }
            const nonOpenItem = state.randomCards.find((item) => item.open === false)
            state.isFinish = nonOpenItem.length > 0 ? false : true;
        }
    },
})

export const allRandomCards = state => state.cards.randomCards
export const skor = state => state.cards.score
export const {setRandomCards, updateFromRandomCards, openCard} = cardsSlice.actions
export default cardsSlice.reducer

// [
//     {
//         id : 1,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",    
//     },
//     {
//         id : 2,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
//     },
//     {
//         id : 3,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
//     },
//     {
//         id : 4,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
//     },
//     {
//         id : 5,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
//     },
//     {
//         id : 6,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
//     },
//     {
//         id : 7,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
//     },
//     {
//         id : 8,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
//     },
//     {
//         id : 9,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
//     },
//     {
//         id : 10,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
//     },
//     {
//         id : 11,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
//     },
//     {
//         id : 12,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
//     },
//     {
//         id : 13,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
//     },
//     {
//         id : 14,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
//     },
//     {
//         id : 15,
//         img : "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
//     },
//]