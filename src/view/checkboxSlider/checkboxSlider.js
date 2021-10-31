import './checkboxSlider.css';
import domManager from '../../domManager/domMananger';

export default function checkboxSlider() {
  const wrapper = domManager({
    tagName: 'label',
    classes: ['switch'],
  });
  const checkbox = domManager({
    tagName: 'input',
    attributes: [{ type: 'checkbox' }],
  });
  const sliderRound = domManager({
    tagName: 'span',
    classes: ['slider', 'round'],
  });

  wrapper.appendChild(checkbox);
  wrapper.appendChild(sliderRound);
  return wrapper;
}
