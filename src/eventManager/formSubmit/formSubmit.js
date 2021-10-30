import myCombineFetchAndDom from '../../combineFetchAndDom/combineFetchAndDom';
import domObj from '../../domModule/domModule';

export default function handleSubmit() {
  const { form, input } = domObj;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    myCombineFetchAndDom(input.value);
    input.value = '';
  });
}
