import myFetchFiveDay from './fetch/fetchFiveDay';
import myInputForm from './view/inputForm';

const myApp = () => {
  const app = {
    init() {
      // this.runFetch();
    },
    runFetch() {
      myFetchFiveDay('Texas');
    },
  };
  return app.init();
};
myApp();

const container = document.querySelector('#container');
const myform = myInputForm();
container.appendChild(myform);
