import React from "react";
import styles from "./../CurrentWeather/CurrentWeather.module.css";

function SelectUnit({ selectUnitHandler, unit, title, value1, value2 }) {
  return (
    <label className={styles.label}>
      <p className={styles.unitName}>{title}</p>
      <select
        className={styles.select}
        value={unit}
        onChange={selectUnitHandler}
      >
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
      </select>
    </label>
  );
}

export default SelectUnit;
