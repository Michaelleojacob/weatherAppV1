import myFetchCurrent from '../fetch/fetchCurrent';
import { li } from '../domModule/domModule';

function extractUsefulProps(obj) {
  const { name } = obj;
  const status = obj.weather[0].description;
  const feelsLike = obj.main.feels_like;
  const high = obj.main.temp_max;
  const low = obj.main.temp_min;
  const wind = obj.wind.speed;
  const { humidity } = obj.main;
  // return [name, status, feelsLike, high, low, wind, humidity];
  return {
    name,
    status,
    feelsLike,
    high,
    low,
    wind,
    humidity,
  };
}

function mutateDom(obj) {
  console.log(li);
  console.log(obj);
}

// class DisplayWeatherInfo {
//   constructor(responseObj) {
//     // make object based in kevlin
//   }
//   // combine li and responseObj

//   // render to screen

//   // change f to c
//   // rerender?

//   // change c to f
//   // rerender?
// }

export default async function myCombineFetchAndDom(query) {
  console.log(query);
  const response = await myFetchCurrent(query);
  // now we need to run a function that takes the response and
  // shoves the response into the dom
  const usefulprops = extractUsefulProps(response);
  mutateDom(usefulprops);
}
