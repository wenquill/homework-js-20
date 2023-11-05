import React from "react";
import styles from "./../CurrentWeather/CurrentWeather.module.css";
import SelectUnit from "./SelectUnit";

function SelectUnits({
  windspeed_unit,
  temperature_unit,
  setWindspeedUnit,
  setTemperatureUnit,
}) {
  function selectTempUnitHandler({ target: { value } }) {
    setTemperatureUnit(value);
  }

  function selectWindUnitHandler({ target: { value } }) {
    setWindspeedUnit(value);
  }

  return (
    <section className={styles.selectUnit}>
      <SelectUnit
        selectUnitHandler={selectTempUnitHandler}
        unit={temperature_unit}
        value1="fahrenheit"
        value2="celsius"
        title="Temperature unit"
      />
      <SelectUnit
        selectUnitHandler={selectWindUnitHandler}
        unit={windspeed_unit}
        value1="kmh"
        value2="ms"
        title="Windspeed unit"
      />
    </section>
  );
}

export default SelectUnits;
