import React from 'react'
import styles from "./../CurrentWeather/CurrentWeather.module.css"
import { FadeLoader } from "react-spinners";
import {
  LiaTemperatureLowSolid,
  LiaWindSolid,
  LiaSun,
  LiaCloudSunSolid,
} from "react-icons/lia";

function CurrentWeatherUnit({weather, isFetching}) {
  return (
    <section className={styles.currWeatherUnit}>
        <div className={styles.loader}>
          {isFetching && <FadeLoader color="white" />}
        </div>
        {!isFetching && (
          <>
            <div>
              {weather?.current?.cloudcover ? (
                <LiaCloudSunSolid size="60" />
              ) : (
                <LiaSun size="60" />
              )}
            </div>
            <div className={styles.weatherContainer}>
              <h2>{weather?.timezone}</h2>
              <div>
                <div className={styles.weatherParams}>
                  <LiaWindSolid />
                  {weather?.current?.windspeed_10m}{" "}
                  {weather?.current_units?.windspeed_10m}
                </div>
                <div className={styles.weatherParams}>
                  <LiaTemperatureLowSolid />
                  {weather && weather.current.temperature_2m}{" "}
                  {weather && weather.current_units.temperature_2m}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
  )
}

export default CurrentWeatherUnit