// import { Images } from '../Data.js';


const changeCat = (state = null, action) => {
  switch (action.type) {
    case 'CHOOSE_CAT':
      return { ...state, catType: action.catType, image: action.catImage };
    default:
      return state;
  }
};

export default changeCat;
