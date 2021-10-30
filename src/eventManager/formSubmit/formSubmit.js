import domObj from '../../domModule/domModule';
import myFetchCurrent from '../../fetch/fetchCurrent';

export default function handleSubmit() {
  const { form, input } = domObj;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(input.value);
    myFetchCurrent(input.value);
  });
}
