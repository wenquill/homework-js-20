import React, { useEffect, useState } from "react";
import { loadWeather } from "../../api";
import { FadeLoader } from "react-spinners";
import styles from "./CurrentWeather.module.css";
import { LiaTemperatureLowSolid, LiaWindSolid } from "react-icons/lia";

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

  function selectTempUnitHandler({ target: { value } }) {
    setTemperatureUnit(value);
  }

  function selectWindUnitHandler({ target: { value } }) {
    setWindspeedUnit(value);
  }

  return (
    <main className={styles.main}>
      <section className={styles.selectUnit}>
        <label className={styles.label}>
          <p className={styles.unitName}>Temperature unit</p>
          <select
            className={styles.select}
            value={temperature_unit}
            onChange={selectTempUnitHandler}
          >
            <option value="fahrenheit">*F</option>
            <option value="celsius">*C</option>
          </select>
        </label>
        <label className={styles.label}>
          <p className={styles.unitName}>Windspeed unit</p>
          <select
            className={styles.select}
            value={windspeed_unit}
            onChange={selectWindUnitHandler}
          >
            <option value="kmh">km/h</option>
            <option value="ms">m/s</option>
          </select>
        </label>
      </section>
      <section className={styles.currWeatherUnit}>
        <div className={styles.loader}>{isFetching && <FadeLoader color="white"/>}</div>
        {!isFetching && (
          <>
            <h2>Current weather</h2>
            <div>
              <div className={styles.weatherParams}>
                <LiaWindSolid />
                {weather && weather.current.windspeed_10m}{" "}
                {weather && weather.current_units.windspeed_10m}
              </div>
              <div className={styles.weatherParams}>
                <LiaTemperatureLowSolid />
                {weather && weather.current.temperature_2m}{" "}
                {weather && weather.current_units.temperature_2m}
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default CurrentWeather;
