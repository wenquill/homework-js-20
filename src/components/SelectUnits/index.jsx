import React from "react";
import styles from "./../CurrentWeather/CurrentWeather.module.css";

function SelectUnits ({windspeed_unit, temperature_unit, setWindspeedUnit, setTemperatureUnit}) {

  function selectTempUnitHandler({ target: { value } }) {
    setTemperatureUnit(value);
  }

  function selectWindUnitHandler({ target: { value } }) {
    setWindspeedUnit(value);
  }

  return (
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
  );
}

export default SelectUnits;
