import _ from 'lodash'

const initialState = { cats: [ {name: 'Ginger', img: 'http://www.warrenphotographic.co.uk/photography/bigs/36559-Ginger-cat-white-background.jpg'},
{name: 'Tabby', img: 'http://www.drodd.com/images13/tabby-cat11.jpg'} ], 
currentCat: { visible: false } }

const catName === genCat.name()

export default function cats(state = initialState, action) {
  const genCat = () =>  {
    return state.cats[_.random(0, state.cats.length -1)]
  }




  switch (action.type) {
    case 'cats/GEN_CAT':
      return {
        ...state,
        cats: [...state.cats, genCat() { ...state.catName}],
       
      }
    default:
      return state
  }
}
