export interface WeatherData {
  city: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Weather data could not be loaded.");
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: data.weather[0].icon,
  };
}