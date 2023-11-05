import React, { useEffect, useState } from "react";
import { loadWeather } from "../../api";
import styles from "./CurrentWeather.module.css";
import SelectUnits from "../SelectUnits";
import CurrentWeatherUnit from "../CurrentWeatherUnit";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [temperature_unit, setTemperatureUnit] = useState("celsius");
  const [windspeed_unit, setWindspeedUnit] = useState("kmh");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    loadWeather({ temperature_unit, windspeed_unit })
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsFetching(false));
  }, [temperature_unit, windspeed_unit]);

  return (
    <main className={styles.main}>
      <SelectUnits
        temperature_unit={temperature_unit}
        windspeed_unit={windspeed_unit}
        setTemperatureUnit={setTemperatureUnit}
        setWindspeedUnit={setWindspeedUnit}
      />
      <CurrentWeatherUnit weather={weather} isFetching={isFetching} />
    </main>
  );
}

export default CurrentWeather;
