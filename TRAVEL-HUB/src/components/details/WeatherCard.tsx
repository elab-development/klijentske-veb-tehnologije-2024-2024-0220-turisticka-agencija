import type { WeatherData } from "../../services/weatherService";

interface WeatherCardProps {
  weather: WeatherData | null;
  loading: boolean;
  error: string;
}

export default function WeatherCard({
  weather,
  loading,
  error,
}: WeatherCardProps) {
  return (
    <aside className="w-full rounded-2xl bg-white p-5 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-gray-900">Current Weather</h2>

      {loading && (
        <p className="text-sm text-gray-500">Loading weather data...</p>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {weather && !loading && !error && (
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              className="h-16 w-16"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {weather.city}
              </h3>

              <p className="capitalize text-sm text-gray-500">
                {weather.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-gray-500">Temp</p>
              <p className="font-semibold text-indigo-600">
                {weather.temperature}°C
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-gray-500">Feels like</p>
              <p className="font-semibold text-gray-900">
                {weather.feelsLike}°C
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-gray-500">Humidity</p>
              <p className="font-semibold text-gray-900">{weather.humidity}%</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-gray-500">Wind</p>
              <p className="font-semibold text-gray-900">
                {weather.windSpeed} m/s
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
