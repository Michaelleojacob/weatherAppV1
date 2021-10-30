export default async function myFetchCurrent(city) {
  const k = process.env.key;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${k}`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      throw new Error(`http request error ${response.status}`);
    }
    const parseResponse = await response.json();
    return parseResponse;
  } catch (err) {
    console.log(err);
  }
  return 'nothing found';
}
