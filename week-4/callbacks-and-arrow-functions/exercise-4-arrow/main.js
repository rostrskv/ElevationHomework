// Exercise 4 - Arrow Functions
const sum = (a, b, c, d) => a + b + c + d;
sum(1, 2, 3, 4)

// Exercise 5 - Arrow Functions
const capitalize = s => s[0].toUpperCase() + s.slice(1).toLowerCase();

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

// Exercise 6 - Arrow functions
const determineWeather = temp => {
  if (temp > 25) {
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => "It's " + determineWeather(temp);

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

