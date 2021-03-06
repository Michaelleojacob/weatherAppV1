const domObj = {
  container: document.querySelector('#container'),
  form: document.querySelector('#form'),
  input: document.querySelector('#input'),
  toggler: document.querySelector('#toggler'),
};

const li = {
  name: document.querySelector('#name'),
  status: document.querySelector('#status'),
  feelsLike: document.querySelector('#feelsLike'),
  high: document.querySelector('#high'),
  low: document.querySelector('#low'),
  wind: document.querySelector('#wind'),
  humidity: document.querySelector('#humidity'),
};

export default domObj;
export { li };
