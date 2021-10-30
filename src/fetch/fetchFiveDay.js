export default async function myFetchFiveDay(city) {
  const k = process.env.key;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${k}`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      throw new Error(`http request error ${response.status}`);
    }
    const parseResponse = await response.json();
    console.log(parseResponse);
  } catch (err) {
    console.log(err);
  }
}

// returns an object with 40 items.
// every 8 items is a new day. 40/3 = 8
// somehow parse the info to give us the high and low for each day
// sort through the 8 items for that day and find the low and high
