import domManager from '../domManager/domMananger';
import myFetchCurrent from '../fetch/fetchCurrent';

export default function myInputForm() {
  function submitHandler(e) {
    e.preventDefault();
    const userInput = e.target.childNodes[0].value;
    myFetchCurrent(userInput);
  }

  function makeFormWithInput() {
    const formWithInput = domManager({
      tagName: 'form',
      attributes: [{ id: 'cityForm' }],
      events: [{ type: 'submit', handler: submitHandler }],
      children: [
        domManager({
          tagName: 'input',
          attributes: [
            { id: 'cityInput' },
            { placeholder: 'city' },
            { value: 'texas' },
          ],
        }),
      ],
    });
    return formWithInput;
  }

  function renderFormWithInput() {
    const container = document.querySelector('#container');
    const input = makeFormWithInput();
    return container.appendChild(input);
  }

  return renderFormWithInput();
}
