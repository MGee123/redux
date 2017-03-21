import _ from 'lodash'

const initialState = { cats: [ {name: 'Ginger', img: 'http://www.warrenphotographic.co.uk/photography/bigs/36559-Ginger-cat-white-background.jpg'},
{name: 'Tabby', img: 'http://www.drodd.com/images13/tabby-cat11.jpg'}, {name: 'kaz', img: 'http://orig07.deviantart.net/ae7a/f/2011/166/6/f/kaz_cat_by_bosimba-d3j09hc.png'} ], 
currentCat: {name: 'Ginger', img: 'http://www.warrenphotographic.co.uk/photography/bigs/36559-Ginger-cat-white-background.jpg'}
}


export default function cats(state = initialState, action) {
  const genCat = () =>  {  
     return state.cats[_.random(state.cats.length)]
   }




  switch (action.type) {
    case 'cats/GEN_CAT':
      return {
        ...state, currentCat: genCat() 
      }
       
      
    default:
      return state
  }
}
