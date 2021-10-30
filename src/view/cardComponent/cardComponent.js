import domManager from '../../domManager/domMananger';

export default function myCardComponent() {
  const makeCard = domManager({
    tagName: 'div',
    attributes: [
      { id: 'card' },
      { style: 'height:300px; width:300px; border: 1px solid black' },
    ],
  });

  // function renderCard(){

  // }

  return makeCard;
}
