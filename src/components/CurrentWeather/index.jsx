import React, { useEffect, useState } from "react";
import { loadWeather } from "../../api";
import { FadeLoader } from "react-spinners";
import styles from "./CurrentWeather.module.css";

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
        console.log(weather);
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
    <>
      <section className={styles.selectUnit}>
        <label>
          Виберіть одиницю вимірювання температури:
          <select value={temperature_unit} onChange={selectTempUnitHandler}>
            <option value="fahrenheit">*F</option>
            <option value="celsius">*C</option>
          </select>
        </label>
        <label>
          Виберіть одиницю вимірюванння швидкості вітру:
          <select value={windspeed_unit} onChange={selectWindUnitHandler}>
            <option value="kmh">km/h</option>
            <option value="ms">m/s</option>
          </select>
        </label>
      </section>
      <div className={styles.loader}>{isFetching && <FadeLoader />}</div>
      <div></div>
    </>
  );
}

export default CurrentWeather;
