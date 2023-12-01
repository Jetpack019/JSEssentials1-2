async function getWeather(cityNames, infoType = 'all') {
    if (!Array.isArray(cityNames)) {
      cityNames = [cityNames];
    }
  
    const results = [];
  
    for (const cityName of cityNames) {
      try {
        const response = await fetch(`http://localhost:3000/weather?city=${cityName}&info=${infoType}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${cityName}`);
        }
  
        const data = await response.json();
        results.push(data);
  
        console.log(`CITY: ${data.city}`);
        if (infoType === 'all' || infoType === 'wind') {
          const wind = data.weather.wind;
          console.log(`WIND: ${wind.speed} m/s, ${wind.deg} deg`);
          if (wind.speed > 15) {
            console.log('WARNING! Wind speed over 15 m/s');
          }
        }
        if (infoType === 'all' || infoType === 'clouds') {
          console.log(`CLOUDS: ${data.weather.clouds} %`);
        }
        if (infoType === 'all' || infoType === 'temp') {
          console.log(`TEMP: ${data.weather.temp} C`);
          if (data.weather.temp < -20) {
            console.log('WARNING! Temperature below -20 degrees');
          }
        }
        if (infoType === 'all' || infoType === 'precipitation') {
          console.log(`PRECIPITATION: ${data.weather.precipitation} %`);
        }
        console.log(); // Add a newline for readability
      } catch (error) {
        console.log(`Error fetching data for ${cityName}: ${error.message}`);
      }
    }
  
    return results;
  }
  
  // Test the function with the provided examples
  let weather1 = getWeather('Berlin', 'wind');
  let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
  