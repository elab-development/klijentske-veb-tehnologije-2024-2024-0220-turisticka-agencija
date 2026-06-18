export interface WeatherData {
  city: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  displayName: string;
}

export class WeatherService {
  private apiKey: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  }

  private validateApiKey(): void {
    if (!this.apiKey) {
      throw new Error("OpenWeather API key is missing.");
    }
  }

  async getWeatherByCoordinates(
    latitude: number,
    longitude: number,
    displayName: string
  ): Promise<WeatherData> {
    this.validateApiKey();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("OpenWeather error:", data);
      throw new Error(data.message || "Weather data could not be loaded.");
    }

    return {
      city: displayName || data.name,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
    };
  }
}