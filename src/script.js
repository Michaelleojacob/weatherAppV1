import eventManager from './eventManager/eventManager';
import myFetchCurrent from './fetch/fetchCurrent';
import './style.css';

const myApp = () => {
  const app = {
    init() {
      this.testing();
      this.manageEvents();
    },
    testing() {
      myFetchCurrent('texas');
    },
    manageEvents() {
      eventManager();
    },
  };
  return app.init();
};
myApp();
