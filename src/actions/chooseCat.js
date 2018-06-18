// import { Images } from '../Data';

const chooseCat = (catType, catImage) => ({
  type: 'CHOOSE_CAT',
  catType,
  catImage
});

export default chooseCat;
