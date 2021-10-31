import checkboxSlider from './checkboxSlider/checkboxSlider';
import domObj from '../domModule/domModule';

export default function myView() {
  const view = {
    init() {
      this.runCheckboxSlider();
    },
    runCheckboxSlider() {
      const checkbox = checkboxSlider();
      domObj.toggler.appendChild(checkbox);
    },
  };
  return view.init();
}
