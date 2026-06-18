import { useEffect, useState } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import Info from "../components/details/Info";
import WeatherCard from "../components/details/WeatherCard";
import {
  WeatherService,
  type WeatherData,
  type Coordinates,
} from "../services/weatherService";

const Details = () => {
  const { id } = useParams();
  const { arrangements } = useAppContext();

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState("");

  const targetArrangement = arrangements.find(
    (arrangement) => arrangement.id === Number(id)
  );

  useEffect(() => {
  if (!targetArrangement?.destination) return;

  const fetchWeather = async () => {
    try {
      setWeatherLoading(true);
      setWeatherError("");

      const destinationCoordinates: Record<string, Coordinates> = {
        Bali: { latitude: -8.4095, longitude: 115.1889, displayName: "Bali" },
        Chamonix: { latitude: 45.9237, longitude: 6.8694, displayName: "Chamonix" },
        Santorini: { latitude: 36.3932, longitude: 25.4615, displayName: "Santorini" },
        Dubai: { latitude: 25.2048, longitude: 55.2708, displayName: "Dubai" },
        Cancun: { latitude: 21.1619, longitude: -86.8515, displayName: "Cancun" },
        Rome: { latitude: 41.9028, longitude: 12.4964, displayName: "Rome" },
        Serengeti: { latitude: -2.3333, longitude: 34.8333, displayName: "Serengeti" },
        Tokyo: { latitude: 35.6762, longitude: 139.6503, displayName: "Tokyo" },
      };

      const coordinates = destinationCoordinates[targetArrangement.destination];

      if (!coordinates) {
        throw new Error("Coordinates for destination are missing.");
      }

      const weatherService = new WeatherService();

      const data = await weatherService.getWeatherByCoordinates(
        coordinates.latitude,
        coordinates.longitude,
        coordinates.displayName
      );

      setWeather(data);
    } catch (error) {
      console.log("Weather fetch error:", error);
      setWeatherError("Weather information is currently unavailable.");
    } finally {
      setWeatherLoading(false);
    }
  };

  fetchWeather();
}, [targetArrangement?.destination]);

  if (!targetArrangement) {
    return (
      <section className="flex min-h-screen w-full flex-col items-center pt-17">
        <Header />

        <div className="mt-10 rounded-xl bg-white p-6 shadow">
          <p className="text-gray-600">Arrangement not found.</p>
        </div>

        <Footer />
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col items-center pt-17">
      <Header />

      <Info key={targetArrangement.id} arrangement={targetArrangement} />

      <WeatherCard
        weather={weather}
        loading={weatherLoading}
        error={weatherError}
      />

      <Footer />
    </section>
  );
};

export default Details;