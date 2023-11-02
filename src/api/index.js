import queryString from "query-string";
import CONFIGS from "../configs";

export function loadWeather(options) {
    const defaultOptions = {
        temperature_unit: 'celsius',
        windspeed_unit: 'kmh',
        baseUrl: CONFIGS.BASE_URL,
    }

    const {baseUrl, ...realOptions} = {
        ...defaultOptions,
        ...options,
    };
    
    console.log(queryString.stringify(realOptions));

    return fetch(
        `${baseUrl}&${queryString.stringify(realOptions)}`
    ).then(response => response.json());
}