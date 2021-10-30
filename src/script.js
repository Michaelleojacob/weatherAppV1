import myCombineFetchAndDom from './combineFetchAndDom/combineFetchAndDom';
import eventManager from './eventManager/eventManager';
import './style.css';

const myApp = () => {
  const app = {
    init() {
      this.manageEvents();
      this.testing();
    },
    manageEvents() {
      eventManager();
    },
    testing() {
      myCombineFetchAndDom('san diego');
    },
  };
  return app.init();
};
myApp();

// function renderDom(obj) {
//   console.log(obj);
//   console.log(obj.name);
//   domObj.name.textContent = obj.name;
//   domObj.status.textContent = obj.weather[0].description;
//   domObj.feelsLike.textContent = obj.main.feels_like;
//   domObj.high.textContent = obj.main.temp_max;
//   domObj.low.textContent = obj.main.temp_min;
//   domObj.wind.textContent = obj.wind.speed;
//   domObj.humidity.textContent = obj.main.humidity;
// }

// const a = async () => {
//   const b = await myFetchCurrent('san diego');
//   console.log(b);
//   renderDom(b);
// };
// a();
