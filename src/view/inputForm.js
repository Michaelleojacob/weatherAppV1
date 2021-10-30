import domManager from '../domManager/domMananger';
import myFetchCurrent from '../fetch/fetchCurrent';

export default function myInputForm() {
  function submitHandler(e) {
    e.preventDefault();
    console.log(e);
    const userInput = e.target.childNodes[0].value;
    myFetchCurrent(userInput);
  }

  const formWithInput = domManager({
    tagName: 'form',
    attributes: [{ id: 'cityForm' }],
    events: [{ type: 'submit', handler: submitHandler }],
    children: [
      // I want to target this child
      domManager({
        tagName: 'input',
        text: 'input',
        attributes: [{ id: 'cityInput' }, { placeholder: 'city' }],
      }),
    ],
  });
  return formWithInput;
}

// export default function myInputForm() {
//   const mything = (e) => {
//     e.preventDefault();
//     console.log(e);
//     // console.log(myFetchFiveDay())
//   };
//   function makeFormInput() {
// const formWithInput = domManager({
//   tagName: 'form',
//   attributes: [{ id: 'cityForm' }],
//   events: [{ type: 'submit', handler: mything }],
//   children: [
//     domManager({
//       tagName: 'input',
//       text: 'input',
//       attributes: [{ id: 'cityInput' }, { placeholder: 'city' }],
//     }),
//   ],
// });
//     return { formWithInput, child: formWithInput.querySelector('#cityInput') };
//   }
// const formWithInput = domManager({
//   tagName: 'form',
//   attributes: [{ id: 'cityForm' }],
//   events: [{ type: 'submit', handler: mything }],
//   children: [
//     domManager({
//       tagName: 'input',
//       text: 'input',
//       attributes: [{ id: 'cityInput' }, { placeholder: 'city' }],
//     }),
//   ],
// });
//   return formWithInput;
// }
